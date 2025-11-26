import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import useHandleNavigation from "./useHandleNavigation";
import { selectUserData, setData } from "../features/user/userDataSlice";

function useModules() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const { handleNavigationClick } = useHandleNavigation();
  const contentRef = useRef<HTMLDivElement>(null);

  // Essa função é responsavel por desbloquear os módulos e informar quando foi finalizado
  const handleModule = ({
    // Índice do módulo
    moduleIndex,
    // Caso seja o último módulo, o unlockedNext deve ser false
    unlockNext = true,
    // Página que deve navegar ao finalizar o módulo
    pageToNavigate
  }: {
    moduleIndex: number,
    unlockNext?: boolean,
    pageToNavigate?: string
  }) => {
    const newModules = [...userData.modules];

    newModules[moduleIndex] = {
      ...newModules[moduleIndex],
      concluded: true,
    };

    if (unlockNext) {
      newModules[moduleIndex + 1] = {
        ...newModules[moduleIndex + 1],
        unlocked: true,
        unlockedSections: [...newModules[moduleIndex + 1].unlockedSections],
      };
      newModules[moduleIndex + 1].unlockedSections[0] = true;
    }

    dispatch(
      setData({
        ...userData,
        modules: newModules,
      })
    );

    if (pageToNavigate !== undefined) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        handleNavigationClick(pageToNavigate);
      }, 100);
    }
  };

  const handleSection = ({
    // Índice do módulo
    moduleIndex,
    // Índice da sessão
    section,
    // Caso queira aumentar o timeout do scroll
    timeout = 250,
    // Caso ele seja true, funciona como um HandleModules
    finishModule = false
  }: {
    moduleIndex: number,
    section: number,
    timeout?: number,
    finishModule?: boolean
  }) => {
    const newModules = [...userData.modules];

    newModules[moduleIndex] = {
      ...newModules[moduleIndex],
      unlockedSections: [...newModules[moduleIndex].unlockedSections],
    };

    newModules[moduleIndex].unlockedSections[section + 1] = true;

    if (finishModule === true) {
      newModules[moduleIndex] = {
        ...newModules[moduleIndex],
        concluded: true,
      };
    }

    dispatch(
      setData({
        ...userData,
        modules: newModules,
      })
    );

    // Scrolla pra próxima sessão
    setTimeout(() => {
      if (contentRef.current) {
        const scrollDestination = contentRef.current.getBoundingClientRect().bottom + window.scrollY;
        window.scrollTo({ top: scrollDestination, behavior: 'smooth' });
      }
    }, timeout)
  };

  const handleInteractions = (index: number[]) => {
    const newInteractionsState = [...userData.interactions];
    newInteractionsState[index[0]] = [...newInteractionsState[index[0]]];
    newInteractionsState[index[0]][index[1]] = [...newInteractionsState[index[0]][index[1]]];
    newInteractionsState[index[0]][index[1]][index[2]] = true;

    dispatch(
      setData({
        ...userData,
        interactions: newInteractionsState,
      })
    );
  }

  return { handleModule, handleSection, contentRef, handleInteractions };
}

export default useModules;
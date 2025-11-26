export interface Location {
  location: string;
}

export const initialLocationState: Location = {
  location: '/home',
};

interface ModuleInterface {
  unlocked: boolean;
  concluded: boolean;
  unlockedSections: boolean[];
}

export interface UserDataState {
  data: {
    modules: ModuleInterface[];
    interactions: boolean[][][];
  };
}


// Todas as informações IMPORTANTES do módulo deixe aqui (ex: unlocked, conclued e unlockedSections.)
// evite salvar imagens dentro do data, uma hora vai dar problema (experiência própria).
export const initialUserDataState: UserDataState = {
  data: {
    modules: [
      {
        unlocked: true,
        concluded: false,
        unlockedSections: [true, false],
      },
    ],

    // use o interactions sempre que quiser salvar a interação do usuário com algum elemento
    // para poder liberar botões, o interactions armazena [][][], sendo o primeiro [0] o módulo
    // o segundo [0][0] a sessão e o terceiro [0][0][0] a interação da sessão
    interactions: [
      [
        [false],
      ],
    ],
  },
};

// Eu recomendaria colocar todos os links Embed aqui, pra facilitar caso tenha que ajustar
export const videosVimeoLinks = [
  '',
]
import { Button, Grid, Typography } from "@mui/material";
import ThemeSettings from "../../theme/themeSettings";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MainGrid } from "./main-grid";

export type QuestionType = {
    question: string,
    alternatives: string[],
    correctAnswer: 0 | 1 | 2 | 3
    feedback: string[][]
}

interface ExerciseProps {
    exerciseInfos: QuestionType[]
    handleFinishExercise: () => void
    secondaryExercise?: boolean
}

export function Exercise({ exerciseInfos, handleFinishExercise, secondaryExercise = false }: ExerciseProps) {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [questionsCompleted, setQuestionsCompleted] = useState(exerciseInfos.map(() => false))
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [feedback, setFeedback] = useState<string[]>([``])
    const [colorExerciseAlternative, setColorExerciseAlternative] = useState<string[]>(exerciseInfos[currentQuestion].alternatives.map(() => ThemeSettings.THEME_COLORS.secondary))
    const [colorExerciseText, setColorExerciseText] = useState<string[]>(exerciseInfos[currentQuestion].alternatives.map(() => ThemeSettings.THEME_COLORS.textSecondary))
    const [verificationAlternative, setVerificationAlternative] = useState(false)
    const [loading, setLoading] = useState(false)
    const [backLoad, setBackLoad] = useState(false)

    const handleColorMouseEnterLeaveAlternative = (index: number) => {
        handleColorMouseEnterLeaveText(index)
        if (colorExerciseAlternative[index] === ThemeSettings.THEME_COLORS.secondary) {
            setColorExerciseAlternative((element) => element.map((_, i) => i === index ? ThemeSettings.THEME_COLORS.primary : ThemeSettings.THEME_COLORS.secondary))
        } else {
            setColorExerciseAlternative((element) => element.map((_, i) => i === index ? ThemeSettings.THEME_COLORS.secondary : ThemeSettings.THEME_COLORS.secondary))
        }
    }

    const handleColorMouseEnterLeaveText = (index: number) => {
        if (colorExerciseText[index] === ThemeSettings.THEME_COLORS.textSecondary) {
            setColorExerciseText((element) => element.map((_, i) => i === index ? ThemeSettings.THEME_COLORS.primary : ThemeSettings.THEME_COLORS.textSecondary))
        } else {
            setColorExerciseText((element) => element.map((_, i) => i === index ? ThemeSettings.THEME_COLORS.textSecondary : ThemeSettings.THEME_COLORS.textSecondary))
        }
    }

    const { contextSafe } = useGSAP()

    const handleBackQuestion = contextSafe(() => {

        if (currentQuestion > 0) {
            setVerificationAlternative(false)
            gsap.to(`.exercise-question-visible`, {
                left: `-120%`,
                delay: .3,
                duration: 1.4,
                ease: `power2.inOut`,
                opacity: 0
            }).then(() => {
                setCurrentQuestion((prev) => prev - 1)
                setSelectedAnswer(null)
                setQuestionsCompleted((element) => element.map((item, index) => currentQuestion - 1 === index ? false : item))
                setVerificationAlternative(false)
                gsap.set(`.exercise-question-visible`, {
                    left: `120%`,
                    duration: 1.4,
                    ease: `power2.inOut`
                }).then(() => {
                    gsap.to(`.exercise-question-visible`, {
                        left: `0%`,
                        duration: 1.4,
                        ease: `power2.inOut`,
                        opacity: 1
                    }).then(() => {
                        setLoading(false)
                    })
                })
            })
        }
    })

    const handleSelectedAnswer = (index: number) => {
        setSelectedAnswer(index)
    }

    const verifyQuestion = contextSafe(() => {

        setLoading(true)
        setBackLoad(true)

        setTimeout(() => {
            setVerificationAlternative(true)
        }, 1000)

        const feedback = exerciseInfos[currentQuestion].feedback[selectedAnswer || 0]

        setFeedback(feedback)

        if (selectedAnswer === exerciseInfos[currentQuestion].correctAnswer) {
            setQuestionsCompleted((element) => element.map((item, index) => currentQuestion === index ? true : item))
        }

        gsap.to(`.exercise-question-visible`, {
            left: `-120%`,
            delay: .3,
            duration: 1.4,
            opacity: 0,
            ease: `power2.inOut`,
        }).then(() => {
            gsap.set(`.exercise-question-visible`, {
                left: `120%`,
                duration: 1.4,
                ease: `power2.inOut`,
                opacity: 1,
            }).then(() => {
                gsap.to(`.feedback-question-exercise`, {
                    top: `20%`,
                    duration: 1.4,
                    opacity: 1,
                    ease: `power2.inOut`
                }).then(() => {
                    setLoading(false)
                })
            })
        })
    })

    const handleNextQuestion = contextSafe(() => {

        setLoading(true)

        gsap.to(`.feedback-question-exercise`, {
            top: `-100%`,
            duration: 1.4,
            ease: `power2.inOut`,
            opacity: 0,
        }).then(() => {
            setBackLoad(false)
            setCurrentQuestion((prev) => prev + 1)
            setSelectedAnswer(null)
            setVerificationAlternative(false)
            gsap.to(`.exercise-question-visible`, {
                left: `0%`,
                duration: 1.4,
                ease: `power2.inOut`,
                opacity: 1,
            }).then(() => {
                setLoading(false)
            })
        })
    })

    const handleTryAgain = () => {

        setLoading(true)

        gsap.to(`.feedback-question-exercise`, {
            top: `-100%`,
            opacity: 0,
            duration: 1.4,
            ease: `power2.inOut`
        }).then(() => {
            setSelectedAnswer(null)
            setVerificationAlternative(false)
            gsap.to(`.exercise-question-visible`, {
                left: `0%`,
                duration: 1.4,
                opacity: 1,
                ease: `power2.inOut`
            }).then(() => {
                setBackLoad(false)
                setLoading(false)
            })
        })
    }

    const handleFinishExerciseClick = () => {
        handleFinishExercise()
    }

    return (
        <Grid
            container
            position={`relative`}
            gap={{
                xs: ThemeSettings.THEME_SPACING.mini,
                sm: ThemeSettings.THEME_SPACING.extraSmall,
                xl: ThemeSettings.THEME_SPACING.verySmall
            }}
            justifyContent={`center`}
            alignItems={`center`}
            alignContent={`space-around`}
        >
            <Grid
                container
                zIndex={999}
                position={`absolute`}
                top={`-100%`}
                sm={5}
                justifyContent={`center`}
                className="feedback-question-exercise"
                borderRadius={{
                    xs: `7px`,
                    sm: `15px`
                }}
                paddingY={{
                    xs: ThemeSettings.THEME_SPACING.verySmall,
                    sm: ThemeSettings.THEME_SPACING.medium,
                    xl: ThemeSettings.THEME_SPACING.semiLarge
                }}
                border={{
                    xs: `1px solid ${ThemeSettings.THEME_COLORS.secondary}`,
                    sm: `3px solid ${ThemeSettings.THEME_COLORS.secondary}`
                }}
                sx={{
                    background: ThemeSettings.THEME_COLORS.primary
                }}
            >
                <Grid container justifyContent={`center`} xs={11}>
                    <Typography component={`strong`}>
                        {feedback.map((text, index) => (
                            <span
                                style={{
                                    fontWeight: index % 2
                                        ? ThemeSettings.THEME_FONT_WEIGHTS.regular
                                        : ThemeSettings.THEME_FONT_WEIGHTS.bold
                                }}
                            >
                                {text}
                            </span>
                        ))}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent={`center`}
                gap={{
                    xs: ThemeSettings.THEME_SPACING.mini,
                    sm: ThemeSettings.THEME_SPACING.extraSmall,
                    xl: ThemeSettings.THEME_SPACING.verySmall
                }}
            >
                <Grid
                    container
                    position={`relative`}
                    className="exercise-question-visible"
                    gap={{
                        xs: ThemeSettings.THEME_SPACING.mini,
                        sm: ThemeSettings.THEME_SPACING.extraSmall - 1,
                        xl: ThemeSettings.THEME_SPACING.verySmall - 2
                    }}
                    justifyContent={`center`}
                >
                    <Typography
                        textAlign={`center`}
                        variant={`h3`}
                    >
                        {exerciseInfos[currentQuestion].question}
                    </Typography>
                </Grid>
                <MainGrid
                    paddingBottom={{
                        xs: ThemeSettings.THEME_SPACING.mini + .5,
                        sm: ThemeSettings.THEME_SPACING.extraSmall,
                        xl: ThemeSettings.THEME_SPACING.verySmall
                    }}
                    className="exercise-question-visible"
                    position={`relative`}
                >
                    <Grid
                        container
                        gap={{
                            xs: ThemeSettings.THEME_SPACING.mini,
                            sm: ThemeSettings.THEME_SPACING.extraSmall - 1,
                            xl: ThemeSettings.THEME_SPACING.verySmall - 1.5
                        }}
                        md={8}
                        position={`relative`}
                        justifyContent={`center`}
                    >
                        {exerciseInfos[currentQuestion].alternatives.map((item, index) => (
                            <Grid
                                container
                                position={`relative`}
                                onClick={() => handleSelectedAnswer(index)}
                                onMouseEnter={() => handleColorMouseEnterLeaveAlternative(index)}
                                onMouseLeave={() => handleColorMouseEnterLeaveAlternative(index)}
                                borderRadius={`15px`}
                                paddingY={{
                                    xs: ThemeSettings.THEME_SPACING.mini - .5,
                                    sm: ThemeSettings.THEME_SPACING.extraSmall - 1,
                                    xl: ThemeSettings.THEME_SPACING.verySmall - 2.5,
                                }}
                                justifyContent={`center`}
                                border={{
                                    xs: `1px solid ${ThemeSettings.THEME_COLORS.secondary}`,
                                }}
                                gap={{
                                    xs: ThemeSettings.THEME_SPACING.mini - .5,
                                    sm: ThemeSettings.THEME_SPACING.extraSmall - 1
                                }}
                                sx={{
                                    cursor: `pointer`,
                                    '&:hover': {
                                        bgcolor: ThemeSettings.THEME_COLORS.white
                                    },
                                    transition: `.3s`,
                                    boxShadow: secondaryExercise ? `0px 4px 25px 0px rgba(0, 0, 0, 0.40)` : `none`,
                                    background: selectedAnswer === index
                                        ? ThemeSettings.THEME_COLORS.primary
                                        : `linear-gradient(180deg, #1C1C1E 0%, #0A0A0A 100%)`
                                }}
                            >
                                <Grid
                                    container
                                    xs={11.5}
                                    alignItems={`center`}
                                    gap={{
                                        xs: ThemeSettings.THEME_SPACING.mini,
                                        sm: ThemeSettings.THEME_SPACING.extraSmall,
                                        xl: ThemeSettings.THEME_SPACING.verySmall
                                    }}
                                >
                                    <Grid
                                        container
                                        sx={{
                                            aspectRatio: 1,
                                            transition: `.3s`
                                        }}
                                        bgcolor={
                                            selectedAnswer === index ? ThemeSettings.THEME_COLORS.primary : colorExerciseAlternative[index]
                                        }
                                        display={secondaryExercise ? `none` : `flex`}
                                        borderRadius={999}
                                        xs={1}
                                        justifyContent={`center`}
                                        alignContent={`center`}
                                    >
                                        <Typography
                                            component={`strong`}
                                            fontSize={{
                                                xs: `4vw`,
                                                sm: `2.5vw`,
                                                md: `1.8vw`
                                            }}
                                        >
                                            {index === 0 && `A)`}
                                            {index === 1 && `B)`}
                                            {index === 2 && `C)`}
                                            {index === 3 && `D)`}
                                            {index === 4 && `E)`}
                                        </Typography>
                                    </Grid>
                                    <Grid container xs>
                                        <Typography
                                            variant="body2"
                                            fontWeight={ThemeSettings.THEME_FONT_WEIGHTS[secondaryExercise ? "semiBold" : "regular"]}
                                            textAlign={{ xs: `left` }}
                                            color={ThemeSettings.THEME_COLORS.white}
                                            sx={{
                                                transition: `.3s`
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </MainGrid>
            </Grid>
            <Grid
                container
                justifyContent={`center`}
                gap={{
                    xs: ThemeSettings.THEME_SPACING.mini,
                    sm: ThemeSettings.THEME_SPACING.extraSmall
                }}
            >
                <Button
                    variant={`contained`}
                    disabled={currentQuestion === 0 || backLoad}
                    onClick={handleBackQuestion}
                >
                    Voltar
                </Button>
                <Button
                    variant={`contained`}
                    disabled={loading || selectedAnswer === null}
                    onClick={() => {
                        questionsCompleted.every((element) => element === true) ?
                            handleFinishExerciseClick() :
                            verificationAlternative ?
                                questionsCompleted[currentQuestion] ? handleNextQuestion() :
                                    handleTryAgain() :
                                verifyQuestion()
                    }}
                >
                    {questionsCompleted.every((element) => element == true) ?
                        `Próximo` :
                        verificationAlternative ?
                            questionsCompleted[currentQuestion]
                                ? `Próxima questão`
                                : `Tentar Novamente`
                            : `Enviar`
                    }
                </Button>
            </Grid>
        </Grid >
    )
}
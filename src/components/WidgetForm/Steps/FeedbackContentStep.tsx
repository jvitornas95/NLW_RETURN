import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../../CloseButton"
import { FeedbackType, feedbackTypes } from "../Index"
import { ScreenshotButton } from "../ScreenshotButton";

interface IFeedbackContentSteps {
    feedbackType: FeedbackType;
    onFeedbackReestartRequested: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackReestartRequested,
    onFeedbackSent
}: IFeedbackContentSteps) {

    const [screenshot, setScreenshot] = useState<String | null>(null);
    const [comment, setComment] = useState('');

    const feedbackInfo = feedbackTypes[feedbackType];

    function handleSubmmitFeedback(event: FormEvent) {
        event.preventDefault();

        console.log({
            screenshot,
            comment
        });

        onFeedbackSent()
    }

    return (

        <>
            <header>

                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackReestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt} className="w-6 h-6" />
                    {feedbackInfo.title}
                </span>

                <CloseButton />
            </header>
            <form onSubmit={handleSubmmitFeedback} className="my-4 w-full">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rouded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que esta acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">

                    <ScreenshotButton
                        onScreenshotTook={setScreenshot}
                        screenshot={screenshot}
                    />

                    <button
                        disabled={comment.length === 0}
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar feedback
                    </button>


                </footer>
            </form>

        </>
    )

}
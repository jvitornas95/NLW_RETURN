import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../../CloseButton"
import { FeedbackType, feedbackTypes } from "../Index"

interface IFeedbackContentSteps {
    feedbackType: FeedbackType;
    onFeedbackReestartRequested: () => void;
}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackReestartRequested
}: IFeedbackContentSteps) {

    const feedbackInfo = feedbackTypes[feedbackType];

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
            <div className="flex py-8 gap-2 w-full">



            </div>
        </>
    )

}
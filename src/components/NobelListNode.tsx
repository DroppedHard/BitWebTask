import NobelController from "../data/NobelController";
import { NobelListNodeFields } from "../interfaces/ComponentInterface";
import { Translation } from "../interfaces/DataInterface";


export default function NobelListNode({ info }: NobelListNodeFields) {
    const formatDate = (date: string): string => {
        let formatter = new Intl.DateTimeFormat("pl-PL", {
            dateStyle: 'short',
        })
        return formatter.format(new Date(date))
    }

    const formatPrize = (prize: number): string => {
        let formatter = new Intl.NumberFormat()
        return "SEK " + formatter.format(prize)
    }

    return (
        <div
            className="flex justify-center rounded-2xl border border-primary-600 dark:bg-accent-600 w-72 h-32 md:h-48 lg:w-96 drop-shadow-xl">
            <div className="p-2 md:p-6">
                <h5
                    className="mb-2 text-base md:text-xl font-bold leading-tight text-center">
                    {info.categoryFullName[NobelController.lang]}
                </h5>
                <div className="flex justify-between flex-col text-center">
                    <p className="text-base">
                        Date: {info.dateAwarded ? formatDate(info.dateAwarded) : "No date provided"}
                    </p>
                    <p className="text-base">
                        Prize: {formatPrize(info.prizeAmount)}
                    </p>
                    <p className="text-base">
                        Prize adjusted: {formatPrize(info.prizeAmountAdjusted)}
                    </p>
                </div>
            </div>
        </div>
    )
}

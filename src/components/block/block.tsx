import { FC } from "react";

type TProps = {
    children: React.ReactNode,
    title: string

}

export const Block:FC<TProps> = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}
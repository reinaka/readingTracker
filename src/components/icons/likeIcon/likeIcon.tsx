import generalStyles from '../../../App.module.css';
import styles from './likeIcon.module.css';
import { FC } from 'react';
import { TBook } from '../../../services/types';

type TProps = {
    handleIconClick : Function,
    item : TBook
};

export const LikeIcon:FC<TProps> = (props) => {
    return (
        <svg className={`${generalStyles.icons} ${props.item.like ? styles.activeLike : undefined}`} width="24" height="24" viewBox="0 0 24 24"
            onClick={() => props.handleIconClick(props.item.id)}
        >
            <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
        </svg>
    )
}
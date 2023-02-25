import { IPlate } from 'types/Plate';

import styles from './Item.module.scss';
import PlateTags from 'components/PlateTags';
import { useNavigate } from 'react-router-dom';

export default function Item(props: IPlate) {
	const { title, description, photo, id } = props;
	const navigate = useNavigate();

	return (
		<div className={styles.item} onClick={() => navigate(`/plate/${id}`)}>
			<div className={styles.item__image}>
				<img src={photo} alt={title} />
			</div>

			<div className={styles.item__description}>
				<div className={styles.item__title}>
					<h2> {title} </h2>
					<p> {description} </p>
				</div>

				<PlateTags {...props}/>
			</div>
		</div>
	);
}

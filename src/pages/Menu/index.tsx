import { useState } from 'react';

import Searcher from './Seacher';
import Filters from './Filters';
import Itens from './Itens';
import { OpcoesOrdenador, Ordinater } from './Ordinater';

import styles from './Menu.module.scss';
import themeStyles from 'styles/Theme.module.scss';

export default function Menu() {
	const [search, setSearch] = useState<string>('');
	const [filter, setFilter] = useState<number | null>(null);
	const [ordenator, setOrdenator] = useState<OpcoesOrdenador>('');

	return (
		<section className={styles.cardapio}>
			<h3 className={themeStyles.title}>Cardápio</h3>

			<Searcher 
				search={search} 
				setSearch={setSearch}
			/>

			<div className={styles.cardapio__filters}>
				<Filters filter={filter} setFilter={setFilter}/>
				<Ordinater ordenator={ordenator} setOrdenator={setOrdenator}/>
			</div>

			<Itens search={search} filter={filter} ordinator={ordenator}/>
		</section>
	);
}
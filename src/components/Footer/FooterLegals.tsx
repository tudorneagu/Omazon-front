function FooterLegals() {
	return (
		<div className="flex flex-col w-full justify-center items-center h-[96px] py-6 text-main-low bg-main-higher">
			<ul className="flex gap-6 text-s-regular">
				<li> Conditions générales de vente</li>
				<li> Vos informations personnelles</li>
				<li> Cookies</li>
				<li> Annonces basées sur vos centres d'interêt</li>
			</ul>
			<p className="text-xs-regular">
				{" "}
				© 2024 Omazon, un clone simplifié de Amazon
			</p>
		</div>
	);
}

export default FooterLegals;

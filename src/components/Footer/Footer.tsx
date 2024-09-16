import FooterCta from "./FooterCta";
import FooterLegals from "./FooterLegals";
import FooterTop from "./FooterTop";
function Footer() {
	return (
		<footer className="flex flex-col w-screen items-center justify-center">
			<FooterTop />
			<FooterCta />
			<FooterLegals />
		</footer>
	);
}

export default Footer;

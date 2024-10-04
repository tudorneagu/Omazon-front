function FooterTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className=" bg-main-medium w-screen text-s-bold text-main-lowest h-12">
      Retour en haut
    </button>
  );
}

export default FooterTop;

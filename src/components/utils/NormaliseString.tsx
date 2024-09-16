function normalizeString(str:string) {
	return str
		.normalize("NFD")
		.replace(/[\u0300-\u036F]/g, "") 
		.toLowerCase();
}
export default normalizeString;

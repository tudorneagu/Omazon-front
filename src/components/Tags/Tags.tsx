import type { ITag } from "../@types/index.types";

interface TagProps {
	tag: ITag;
}

const Tag = ({ tag }: TagProps) => {
	if (!tag) {
		return null;
	}
	return (
		<div
			className=" top-0 -left-7 w-[180px] overflow-hidden relative
		 ml-5 "
		>
			<div
				className={`absolute tag-${tag.type} w-[150px] h-full transform skew-x-[-35deg] origin-top-left inline-block`}
			/>
			{tag.type === "choice" ? (
				<p className="tag w-[180px] ">
					Choix <span className="text-brand-primary">d'Omazon</span>
				</p>
			) : (
				<p className="tag">{tag.text}</p>
			)}
		</div>
	);
};

export default Tag;

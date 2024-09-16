import type { MouseEventHandler } from "react";

interface ButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	type?: "button" | "submit" | "reset";
	width?: string;
	borderRadius?: string;
	rounded?: string;
	content?: string;
	textColor?: string;
	px?: string;
}

function Button({
	onClick,
	type = "button",
	width = "w-full",
	rounded = "",
	content,
	textColor = "text-main-highest",
	px = "px-4",
}: ButtonProps) {
	return (
		<button
			type={type}
			className={`${width} ${textColor} text-s-regular ${rounded} bg-button-default-background border border-button-default-border rounded-lg hover:bg-button-hover-background hover:border-button-hover-border active:bg-button-active-background active:border-button-active-border text-main-highest py-1 ${px} `}
			onClick={onClick}
			content={content}
		>
			{content}
		</button>
	);
}

export default Button;

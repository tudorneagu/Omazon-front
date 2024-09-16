interface AccountOptionsProps {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
}

function AccountOptions({
  title,
  description,
  icon,
  onClick,
}: AccountOptionsProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className=" max-w-[300px] w-full border rounded-md border-brand-grey/50 px-5 py-5 flex gap-4  hover:bg-brand-grey/10 hover:border-brand-grey/20"
    >
      <img
        className="z-10 w-16 h-16 fill-white "
        src={icon}
        alt="user profile thumbnail"
      />

      <div className="flex flex-col text-left ">
        <h1 className="text-m-medium">{title}</h1>
        <p className="text-main-medium text-s-regular">{description}</p>
      </div>
    </button>
  );
}

export default AccountOptions;

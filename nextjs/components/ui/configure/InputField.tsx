interface Props {
  id: string;
  onChange: (id: string, value: string) => void;
}

export const InputField = ({ id, onChange }: Props) => (
  <div className="px-5 py-2 border-b-[1px] border-gray-300">
    {id}
    <input
      id={id}
      className="w-full p-1 my-1 border bg-gray-50 border-gray-50 font-light hover:border-gray-300 focus:outline-[#D2C3F1]"
      onChange={(e) => onChange(id, e.target.value)}
    />
  </div>
);

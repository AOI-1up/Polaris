interface Props {
  id: string;
  onChange: (id: string, value: string) => void;
}

export const InputField = ({ id, onChange }: Props) => (
  <div className="border-b-[1px] border-gray-300 px-5 py-2">
    {id}
    <input
      id={id}
      className="my-1 w-full border border-gray-50 bg-gray-50 p-1 font-light hover:border-gray-300 focus:outline-[#D2C3F1]"
      onChange={(e) => onChange(id, e.target.value)}
    />
  </div>
);

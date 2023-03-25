import "./styles.css";
import Select from "./component/Select";

interface ICountry {
  name: string;
  code: string;
  flag: string;
}

const data: ICountry[] = [
  {
    name: "Afghanistan",
    code: "AF",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
  },
  {
    name: "American Samoa",
    code: "AS",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg",
  },
  {
    name: "Austria",
    code: "AI",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
  },
  {
    name: "Nigeria",
    code: "AR",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
  },
];

export default function App() {
  return (
    <div className="container flex h-screen w-full items-center justify-center">
      <div className="w-full w-6/12 mx-auto">
        <Select
          label="Label"
          options={data}
          render={(item, isSelected) => (
            <div className="flex item-center justify-start">
              <img src={item.flag} className="w-5 h-5 mr-2" />
              <span>{item.name}</span>
            </div>
          )}
        />
      </div>
    </div>
  );
}

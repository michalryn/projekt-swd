import { FoodKindType } from "../types";
import { FormWrapper } from "./FormWrapper";

type FoodKindData = {
  foodKinds: FoodKindType[];
};

type FoodKindFormProps = FoodKindData & {
  updateData: (fields: FoodKindData) => void;
};

export function FoodKindForm({ foodKinds, updateData }: FoodKindFormProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.checked) {
      updateData({
        foodKinds: [
          ...foodKinds,
          FoodKindType[e.currentTarget.id as FoodKindType],
        ],
      });
    } else {
      updateData({
        foodKinds: foodKinds.filter(
          (x) => x !== FoodKindType[e.currentTarget.id as FoodKindType]
        ),
      });
    }
  }

  return (
    <FormWrapper
      title="Rodzaj jedzenia"
      description="Wybierz interesujące cię rodzaje jedzenie"
    >
      <div
        style={{
          padding: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          justifyItems: "center",
          rowGap: "1rem",
        }}
      >
        <label
          style={{
            width: "min-content",
            display: "flex",
            flexDirection: "column-reverse",
            gap: ".25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            id={FoodKindType.ASIAN}
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            type="checkbox"
            checked={foodKinds.includes(FoodKindType.ASIAN)}
            onChange={handleChange}
          />
          Azjatyckie
        </label>
        <label
          style={{
            width: "min-content",
            display: "flex",
            flexDirection: "column-reverse",
            gap: ".25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            id={FoodKindType.POLISH}
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            type="checkbox"
            checked={foodKinds.includes(FoodKindType.POLISH)}
            onChange={handleChange}
          />
          Polskie
        </label>
        <label
          style={{
            width: "min-content",
            display: "flex",
            flexDirection: "column-reverse",
            gap: ".25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            id={FoodKindType.SOPHISTICATED}
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            type="checkbox"
            checked={foodKinds.includes(FoodKindType.SOPHISTICATED)}
            onChange={handleChange}
          />
          Wykwintne
        </label>
        <label
          style={{
            width: "min-content",
            display: "flex",
            flexDirection: "column-reverse",
            gap: ".25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            id={FoodKindType.BURGER}
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            type="checkbox"
            checked={foodKinds.includes(FoodKindType.BURGER)}
            onChange={handleChange}
          />
          Burgery
        </label>
        <label
          style={{
            width: "min-content",
            display: "flex",
            flexDirection: "column-reverse",
            gap: ".25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            id={FoodKindType.TATAR}
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            type="checkbox"
            checked={foodKinds.includes(FoodKindType.TATAR)}
            onChange={handleChange}
          />
          Tatar
        </label>
        <label
          style={{
            width: "min-content",
            display: "flex",
            flexDirection: "column-reverse",
            gap: ".25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            id={FoodKindType.HUNGARY}
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            type="checkbox"
            checked={foodKinds.includes(FoodKindType.HUNGARY)}
            onChange={handleChange}
          />
          Węgierskie
        </label>
        <label
          style={{
            width: "min-content",
            display: "flex",
            flexDirection: "column-reverse",
            gap: ".25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            id={FoodKindType.PIEROGI}
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            type="checkbox"
            checked={foodKinds.includes(FoodKindType.PIEROGI)}
            onChange={handleChange}
          />
          Pierogi
        </label>
        <label
          style={{
            width: "min-content",
            display: "flex",
            flexDirection: "column-reverse",
            gap: ".25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            id={FoodKindType.STEAK}
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            type="checkbox"
            checked={foodKinds.includes(FoodKindType.STEAK)}
            onChange={handleChange}
          />
          Steki
        </label>
        <label
          style={{
            width: "min-content",
            display: "flex",
            flexDirection: "column-reverse",
            gap: ".25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            id={FoodKindType.PIZZA}
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            type="checkbox"
            checked={foodKinds.includes(FoodKindType.PIZZA)}
            onChange={handleChange}
          />
          Pizza
        </label>
      </div>
    </FormWrapper>
  );
}

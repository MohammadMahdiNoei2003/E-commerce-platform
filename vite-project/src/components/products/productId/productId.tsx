// import IProductID from "./productId.type"
import "./productId.css"
import { Button, ColorSwatch, HStack, Input, Tabs, Textarea } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"
import { Field } from "@/components/ui/field"
import { memo, useState } from "react";

interface IProductID {
  ListFeature: Feature[];
}
interface Feature {
  Atrebut: string;
  Discription: string;
}
const ProductID = (props: IProductID) => {

  const { ListFeature } = props;

  const [Colors, setColors] = useState<string[]>(initialColors);

  const Del = (color: string) => {
    setColors(prevColors => {
      const index = prevColors.indexOf(color);
      if (index !== -1) {
        const newColors = prevColors.filter((_, i) => i !== index);
        return newColors;
      }
      return prevColors;
    });
  };

  const Add = (color: string) => {
    setColors(prevColors => {
      if (!prevColors.includes(color)) {
        return [...prevColors, color]
      }
      return prevColors;
    });
  };




  const [atrebut, setAtrebut] = useState<string>('');
  const [description, setDescription] = useState<string>('');


  const [Atrebuts, setAtrebuts] = useState<Feature[]>(ListFeature);

  const DelAtrebut = (Atrebut: Feature) => {
    setAtrebuts(prevAtrebuts => {
      const index = prevAtrebuts.indexOf(Atrebut);
      if (index !== -1) {
        const newAtrebuts = prevAtrebuts.filter((_, i) => i !== index);
        return newAtrebuts;
      }
      return prevAtrebuts;
    });
  };

  const AddAtrebut = (newFeature: Feature) => {
    setAtrebuts(prevFeatures => {
      if (!prevFeatures.some(feature => feature.Atrebut === newFeature.Atrebut)) {
        return [...prevFeatures, newFeature];
      }
      return prevFeatures;
    });
  };



  return (
    <div className="ProductID-main">
      <div className="ProductID_top" >
        <Tabs.Root defaultValue="1" variant="plain" className="ProductID_top-img">
          <Tabs.List rounded="l3" p="1" className="ProductID_top_sid-images">
            <div>
              <div className="ProductID_top_sid-images">
                {images.map((image) => (
                  <Tabs.Trigger value={image.id.toString()} className="ProductID_top_sid-tabs">
                    <img src={image.src} alt="salam" />
                  </Tabs.Trigger>
                ))}
              </div>
            </div>
          </Tabs.List>
          <div className="ProductID_top_main-img">
            {images.map((image) => (
              <Tabs.Content value={image.id.toString()} className="ProductID_top_main-tabs">
                <img src={image.src} alt="salam" />
              </Tabs.Content>
            ))}
          </div>
        </Tabs.Root>
        <div className="ProductID_top-Information">
          <div className="ProductID_top-name">Colman portable bluetooth speaker</div>
          <h2>discription:</h2>
          <div className="ProductID_top-discription">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde itaque voluptatem doloremque facilis blanditiis voluptates hic quidem eligendi nobis.</p>
          </div>
          <h3>colors:</h3>
          <div className="colors">
            <HStack className="ProductID_top-colors">
              {Colors.map((color) => (
                <ColorSwatch key={color} value={color} size="xl" className="ProductID_top-color" />
              ))}
            </HStack>
          </div>

          <h2>Atrebuts</h2>
          <div className="Atrebuts">
            <HStack className="ProductID_top-colors">
              {Atrebuts.map((Atrebut) => (
                <Tooltip content={Atrebut.Discription} contentProps={{ css: { "--tooltip-bg": "#9E9E9E", padding: ".4rem" } }}  >
                  <div className="box">
                    <h3>{Atrebut.Atrebut}</h3>
                    <h4>{Atrebut.Discription}</h4>
                  </div>
                </Tooltip>
              ))}
            </HStack>
          </div>
        </div>
      </div>
      {/* <div className="ProductID_but" >
        <div className="ProductID_but-name" >
          <h2 className="titr" >name :<span> {productID.name} </span></h2>

          <AccordionRoot collapsible className="s">
            {items.map((item, index) => (
              <AccordionItem key={index} value={item.value}  >
                <AccordionItemTrigger className="ss">{item.title}</AccordionItemTrigger>
                <AccordionItemContent className="ss2">
                  <Stack gap="4" align="flex-start" maxW="2xl">
                    <Field label="New Name :" className="ss2_form-lable">
                      <Input className="ss2_form-input" />
                    </Field>
                    <Button type="submit" className="ss2_form-button" >Submit</Button>
                  </Stack>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>

        </div>
        <div className="ProductID_but-Prise" >
          <h2 className="titr">Prise : <span>{productID.price.toString()}</span> $ </h2>

          <AccordionRoot collapsible className="s">
            {items.map((item, index) => (
              <AccordionItem key={index} value={item.value}  >
                <AccordionItemTrigger className="ss">{item.title}</AccordionItemTrigger>
                <AccordionItemContent className="ss2">
                  <Stack gap="4" align="flex-start" maxW="2xl">
                    <Field label="New Prise :" className="ss2_form-lable">
                      <Input className="ss2_form-input" />
                    </Field>
                    <Button type="submit" className="ss2_form-button" >Submit</Button>
                  </Stack>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </div>
        <div className="ProductID_but-discription" >
          <div className="titr">
            <h2>discription :</h2>
            <p>{productID.discription}</p>
          </div>

          <AccordionRoot collapsible className="s">
            {items.map((item, index) => (
              <AccordionItem key={index} value={item.value}  >
                <AccordionItemTrigger className="ss">{item.title}</AccordionItemTrigger>
                <AccordionItemContent className="ss2">
                  <Stack gap="4" align="flex-start" maxW="2xl">
                    <Field label="New Discription :" className="ss2_form-lable">
                      <Input className="ss2_form-input" />
                    </Field>
                    <Button type="submit" className="ss2_form-button" >Submit</Button>
                  </Stack>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </div>
        <div className="ProductID_but-colors" >
          <div className="titr">
            <h3>colors:</h3>
            <HStack className="ProductID_top-colors">
              {Colors.map((color) => (
                <ColorSwatch key={color} value={color} size="xl" className="ProductID_top-color" />
              ))}
            </HStack>
          </div>
        </div>
        <div className="ProductID_but-number" >
          <h2 className="titr"> number : <span>{productID.Quantity}</span> </h2>
        </div>
        <div className="ProductID_but-Feature" >
          <div className="titr">
            <h2>Feature :</h2>
            <div className="Atrebuts">
              <HStack className="ProductID_top-colors">
                {Atrebuts.map((Atrebut) => (
                  <Tooltip content={Atrebut.discription} contentProps={{ css: { "--tooltip-bg": "#9E9E9E", padding: ".4rem" } }}  >
                    <div className="box">
                      <h3>{Atrebut.Atrebut}</h3>
                      <h4>{Atrebut.discription}</h4>
                    </div>
                  </Tooltip>
                ))}
              </HStack>
            </div>
          </div>
        </div>
        <div>
          <Button style={{ backgroundColor: "aqua", border: "1px solid black", padding: "2rem", margin: ".5rem" }}>del pruduct</Button>
          <Button style={{ backgroundColor: "aqua", border: "1px solid black", padding: "2rem", margin: ".5rem" }}>activ</Button>
          <Button style={{ backgroundColor: "aqua", border: "1px solid black", padding: "2rem", margin: ".5rem" }}>nuActiv</Button>
        </div>
      </div> */}
      <div className="ProductID_but-t">
        <div className="ProductID_but_update">
          <div className="ProductID_but_update-header">
            Update Product
          </div>
          <div className="ProductID_but_update-main">

            <Field label="Name Product:" className="ProductID_but_update_name-lable ProductID_but_update-lable">
              <Input placeholder={productID.name} className="ProductID_but_update_name-input ProductID_but_update-input" />
            </Field>

            <Field label="Prise Product:" className="ProductID_but_update_prise-lable ProductID_but_update-lable">
              <Input placeholder={productID.price.toString()} className="ProductID_but_update_prise-input ProductID_but_update-input" />
            </Field>

            <Field label="Prise Product:" className="ProductID_but_update_discription-lable ProductID_but_update-lable">
              <Textarea className="ProductID_but_update_discription-Textarea ProductID_but_update-Textarea" placeholder={productID.discription} rows={3} />
            </Field>

            <div className="ProductID_but_update_colors">
              <h3>Colors: <span>Click on the colors to remove.</span></h3>
              <HStack className="ProductID_but_update_colors_container_Del ProductID_but_update_colors_container">
                {Colors.map((color) => (
                  <ColorSwatch key={color} value={color} size="xl" className="ProductID_but_update_colors_container_Del-color ProductID_but_update_colors_container-color" onClick={() => Del(color)} />
                ))}
              </HStack>
            </div>

            <div className="ProductID_but_update_colors">
              <h3>Add Colors: <span>Click on the colors to add.</span></h3>
              <HStack className="ProductID_but_update_colors_container_Add ProductID_but_update_colors_container">
                {AllColors.map((color) => (
                  <ColorSwatch key={color} value={color} size="xl" className="ProductID_but_update_colors_container_Add-color ProductID_but_update_colors_container-color" onClick={() => Add(color)} />
                ))}
              </HStack>
            </div>

            <Field label="Quantity Product:" className="ProductID_but_update_quantity-lable ProductID_but_update-lable">
              <Input placeholder={productID.Quantity.toString()} className="ProductID_but_update_quantity-input ProductID_but_update-input" />
            </Field>

            <div className="ProductID_but_update_feature">
              <h3>Feature : <span>Click on the box to remove.</span></h3>
              <div className="Atrebuts">
                <HStack className="ProductID_but_update_feature-container">
                  {Atrebuts.map((Atrebut) => (
                    <Tooltip content={Atrebut.Discription} contentProps={{ css: { "--tooltip-bg": "#9E9E9E", padding: ".4rem" } }}  >
                      <div className="box" onClick={() => DelAtrebut(Atrebut)}>
                        <h3>{Atrebut.Atrebut}</h3>
                        <h4>{Atrebut.Discription}</h4>
                      </div>
                    </Tooltip>
                  ))}
                </HStack>
              </div>
            </div>

            <div className="ProductID_but_update_feature">
              <h3>Add Feature :</h3>
              <div className="ProductID_but_update_feature-container Add_Atrebut">

                <Input placeholder="Atrebut" className="ProductID_but_update_feature-input" onChange={(e) => setAtrebut(e.target.value)} />
                <Textarea className="ProductID_but_update_feature-Textarea" placeholder="Discription" rows={3} onChange={(e) => setDescription(e.target.value)} />
                <Button
                  className="ProductID_but_update_feature-but"
                  onClick={() => {
                    if (!atrebut || !description) {
                      alert("Atrebut and Description cannot be empty or duplicate.");
                    } else {
                      const newFeature: Feature = {
                        Atrebut: atrebut,
                        Discription: description
                      };
                      AddAtrebut(newFeature);
                      setAtrebut('');
                      setDescription('');
                    }
                  }}>
                  Add Atrebut
                </Button>
              </div>
            </div>

          </div>
          <div className="ProductID_but_update-footer">

            <Button className="ProductID_but_update-but" > Update All</Button>
            {/* <Button className="ProductID_but_update-but" > Add Atrebut</Button> */}
            {/* <Button className="ProductID_but_update-but" > Add Atrebut</Button> */}

          </div>
        </div>
      </div>

    </div>
  )
}
export default memo(ProductID);


const initialColors = [
  "pink",
  "black",
  "blue",
  "yellow",
  "red",
];

const AllColors = [
  "red",
  "yellow",
  "yellowgreen",
  "green",
  "violet",
  "orange",
  "purple",
  "blue",
  "pink",
  "black",
  "white",
];

const images = [
  {
    id: 1,
    src: "/images/test.jpg"
  },
  {
    id: 2,
    src: "/images/test.jpg"
  },
  {
    id: 3,
    src: "/images/test.jpg"
  },
  {
    id: 4,
    src: "/images/test.jpg"
  },
  {
    id: 5,
    src: "/images/test.jpg"
  },
  {
    id: 6,
    src: "/images/404.jpg"
  },
  {
    id: 7,
    src: "/images/404.jpg"
  },

]

const productID = {
  id: 1,
  name: "spiker",
  price: 180000,
  discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde itaque voluptatem doloremque facilis blanditiis voluptates hic quidem eligendi nobis.",
  colors: [
    "pink",
    "black",
    "blue",
    "yellow",
    "red"
  ],
  Quantity: 23,
  Feature: [
    {
      Atrebut: "نوع اتصال",
      discription: "دوگانه (بی‌سیم و با سیم)، بلوتوث"
    },
    {
      Atrebut: "درگاه‌های ارتباطی",
      discription: "بلوتوث"
    },
    {
      Atrebut: "نوع باتری",
      discription: "لیتیومی"
    },
    {
      Atrebut: "رابط‌ها",
      discription: "جک ۳.۵ میلی‌متری خروجی صدا شیار کارت حافظه "
    },
    {
      Atrebut: "size",
      discription: "hight : 100cm , width : 50cm"
    }
  ]

}

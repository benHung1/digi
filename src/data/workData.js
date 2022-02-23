import {
  BsShieldLockFill,
  BsFillLightningFill,
  BsSnapchat,
  BsSuitSpadeFill,
  BsSunglasses,
} from "react-icons/bs";
import { BiSupport, BiDollar } from "react-icons/bi";
import { IoIosOptions } from "react-icons/io";
import { HiCubeTransparent } from "react-icons/hi";

const Icon = (IconComponents) => {
  return (
    <IconComponents
      size={60}
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
      }}
    />
  );
};

export const work = [
  {
    icon: Icon(BsShieldLockFill),
    title: "UXDesign",
    description:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
  },
  {
    icon: Icon(BiSupport),
    title: "UI Design",
    description:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
  },
  {
    icon: Icon(BsFillLightningFill),
    title: "website\r\ndevelopment",
    description:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
  },
  {
    icon: Icon(BiDollar),
    title: "mobile app\r\ndevelopment",
    description:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
  },
  {
    icon: Icon(IoIosOptions),
    title: "ecommerce",
    description:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
  },
  {
    icon: Icon(HiCubeTransparent),
    title: "customer loyalty",
    description:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
  },
  {
    icon: Icon(BsSnapchat),
    title: "DIGITAL\r\nTRANSFORMATION",
    description:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
  },
  {
    icon: Icon(BsSuitSpadeFill),
    title: "DIGTAL\r\nMARKETING",
    description:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
  },
  {
    icon: Icon(BsSunglasses),
    title: "BRANDING",
    description:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.",
  },
];

export const works = {
  TopTitle: "OUR INGRADIENTS",
  Content:
    "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Crasullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,venenatis facilisis dolor. In feugiat orci odio, sed lacinia semelementum quis. Aliquam consectetur, eros et vulputate euismod, nuncleo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortismolestie faucibus.",
  Button: "OUR SERVICES",
  LastText: "VIEW MORE DIGISALAD’S INGRADIENTS",
};

export const floatcontainer = {
  name: "Tony Ng",
  desc: "Founder & Creative Director",
  text: "A great digital work isn’t aboutdesigning beautiful pagespurely. It is about context-how do we deliver the ",
  span: "right experience to the right person at the right time.",
  textend:
    "The most important thing is that your work can engage customersat anytime, anywhere and let users experience an entire amazingdigital journey.",
};

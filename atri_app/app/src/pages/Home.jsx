import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useDivNavCb, useFlexNavCb, useDivNavbarCb, useFlexnavbarCb, useDivhomeCb, useDiv7Cb, useFlex7Cb, useDiv8Cb, useDiv9Cb, useDiv10Cb, useFlex8Cb, useDiv11Cb, useDiv12Cb, useFlex9Cb, useLogoCb, useTextBoxbarCb, useText2Cb, useText3Cb, useText4Cb, useText5Cb, useTextCb, useButton1Cb, useButton2Cb, useTextBox14Cb, useImage4Cb, useTextBox15Cb, useImage5Cb, useImage6Cb, useImage8Cb, useImage9Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const DivNavProps = useStore((state)=>state["Home"]["DivNav"]);
const DivNavIoProps = useIoStore((state)=>state["Home"]["DivNav"]);
const DivNavCb = useDivNavCb()
const FlexNavProps = useStore((state)=>state["Home"]["FlexNav"]);
const FlexNavIoProps = useIoStore((state)=>state["Home"]["FlexNav"]);
const FlexNavCb = useFlexNavCb()
const DivNavbarProps = useStore((state)=>state["Home"]["DivNavbar"]);
const DivNavbarIoProps = useIoStore((state)=>state["Home"]["DivNavbar"]);
const DivNavbarCb = useDivNavbarCb()
const FlexnavbarProps = useStore((state)=>state["Home"]["Flexnavbar"]);
const FlexnavbarIoProps = useIoStore((state)=>state["Home"]["Flexnavbar"]);
const FlexnavbarCb = useFlexnavbarCb()
const DivhomeProps = useStore((state)=>state["Home"]["Divhome"]);
const DivhomeIoProps = useIoStore((state)=>state["Home"]["Divhome"]);
const DivhomeCb = useDivhomeCb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const LogoProps = useStore((state)=>state["Home"]["Logo"]);
const LogoIoProps = useIoStore((state)=>state["Home"]["Logo"]);
const LogoCb = useLogoCb()
const TextBoxbarProps = useStore((state)=>state["Home"]["TextBoxbar"]);
const TextBoxbarIoProps = useIoStore((state)=>state["Home"]["TextBoxbar"]);
const TextBoxbarCb = useTextBoxbarCb()
const Text2Props = useStore((state)=>state["Home"]["Text2"]);
const Text2IoProps = useIoStore((state)=>state["Home"]["Text2"]);
const Text2Cb = useText2Cb()
const Text3Props = useStore((state)=>state["Home"]["Text3"]);
const Text3IoProps = useIoStore((state)=>state["Home"]["Text3"]);
const Text3Cb = useText3Cb()
const Text4Props = useStore((state)=>state["Home"]["Text4"]);
const Text4IoProps = useIoStore((state)=>state["Home"]["Text4"]);
const Text4Cb = useText4Cb()
const Text5Props = useStore((state)=>state["Home"]["Text5"]);
const Text5IoProps = useIoStore((state)=>state["Home"]["Text5"]);
const Text5Cb = useText5Cb()
const TextProps = useStore((state)=>state["Home"]["Text"]);
const TextIoProps = useIoStore((state)=>state["Home"]["Text"]);
const TextCb = useTextCb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()

  return (<>
  <Div className="p-Home DivNav bpt" {...DivNavProps} {...DivNavCb} {...DivNavIoProps}>
<Flex className="p-Home FlexNav bpt" {...FlexNavProps} {...FlexNavCb} {...FlexNavIoProps}>
<Image className="p-Home Logo bpt" {...LogoProps} {...LogoCb} {...LogoIoProps}/>
<Div className="p-Home DivNavbar bpt" {...DivNavbarProps} {...DivNavbarCb} {...DivNavbarIoProps}>
<Flex className="p-Home Flexnavbar bpt" {...FlexnavbarProps} {...FlexnavbarCb} {...FlexnavbarIoProps}>
<TextBox className="p-Home TextBoxbar bpt" {...TextBoxbarProps} {...TextBoxbarCb} {...TextBoxbarIoProps}/>
<TextBox className="p-Home Text2 bpt" {...Text2Props} {...Text2Cb} {...Text2IoProps}/>
<TextBox className="p-Home Text3 bpt" {...Text3Props} {...Text3Cb} {...Text3IoProps}/>
<TextBox className="p-Home Text4 bpt" {...Text4Props} {...Text4Cb} {...Text4IoProps}/>
<TextBox className="p-Home Text5 bpt" {...Text5Props} {...Text5Cb} {...Text5IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home Divhome bpt" {...DivhomeProps} {...DivhomeCb} {...DivhomeIoProps}>
<Div className="p-Home Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<TextBox className="p-Home Text bpt" {...TextProps} {...TextCb} {...TextIoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
</Div>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Div>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<Flex className="p-Home Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
  </>);
}

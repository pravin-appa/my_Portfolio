import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useDiv15Cb, useDiv16Cb, useDiv17Cb, useFlex11Cb, useDiv18Cb, useFlex12Cb, useDiv19Cb, useFlex14Cb, useDiv20Cb, useFlex15Cb, useTextServicesCb, useTextCb, useImage10Cb, useTextBox1Cb, useTextBoxCb, useTextBoCb, useTextBox24Cb, useTextBox25Cb, useTextBox31Cb, useTextBox32Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useImage12Cb, useImage13Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useTextBox40Cb } from "../page-cbs/Services";
import "../page-css/Services.css";
import "../custom/Services";

export default function Services() {
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

  const Div15Props = useStore((state)=>state["Services"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Services"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div16Props = useStore((state)=>state["Services"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Services"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Div17Props = useStore((state)=>state["Services"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Services"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Flex11Props = useStore((state)=>state["Services"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Services"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div18Props = useStore((state)=>state["Services"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Services"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Flex12Props = useStore((state)=>state["Services"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Services"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Div19Props = useStore((state)=>state["Services"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Services"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Flex14Props = useStore((state)=>state["Services"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Services"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Div20Props = useStore((state)=>state["Services"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["Services"]["Div20"]);
const Div20Cb = useDiv20Cb()
const Flex15Props = useStore((state)=>state["Services"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Services"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const TextServicesProps = useStore((state)=>state["Services"]["TextServices"]);
const TextServicesIoProps = useIoStore((state)=>state["Services"]["TextServices"]);
const TextServicesCb = useTextServicesCb()
const TextProps = useStore((state)=>state["Services"]["Text"]);
const TextIoProps = useIoStore((state)=>state["Services"]["Text"]);
const TextCb = useTextCb()
const Image10Props = useStore((state)=>state["Services"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Services"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox1Props = useStore((state)=>state["Services"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Services"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const TextBoxProps = useStore((state)=>state["Services"]["TextBox"]);
const TextBoxIoProps = useIoStore((state)=>state["Services"]["TextBox"]);
const TextBoxCb = useTextBoxCb()
const TextBoProps = useStore((state)=>state["Services"]["TextBo"]);
const TextBoIoProps = useIoStore((state)=>state["Services"]["TextBo"]);
const TextBoCb = useTextBoCb()
const TextBox24Props = useStore((state)=>state["Services"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Services"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["Services"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Services"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox31Props = useStore((state)=>state["Services"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Services"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Services"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Services"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["Services"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Services"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Services"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Services"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Services"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Services"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image12Props = useStore((state)=>state["Services"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Services"]["Image12"]);
const Image12Cb = useImage12Cb()
const Image13Props = useStore((state)=>state["Services"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Services"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox36Props = useStore((state)=>state["Services"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Services"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Services"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Services"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Services"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Services"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Services"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Services"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Services"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Services"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()

  return (<>
  <Div1 className="p-Services Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<TextBox1 className="p-Services TextServices bpt" {...TextServicesProps} {...TextServicesCb} {...TextServicesIoProps}/>
</Div1>
<Div1 className="p-Services Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<TextBox1 className="p-Services Text bpt" {...TextProps} {...TextCb} {...TextIoProps}/>
</Div1>
<Div1 className="p-Services Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Flex1 className="p-Services Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Div1 className="p-Services Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<Flex1 className="p-Services Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Image1 className="p-Services Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox1 className="p-Services TextBox1 bpt" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
<TextBox1 className="p-Services TextBox bpt" {...TextBoxProps} {...TextBoxCb} {...TextBoxIoProps}/>
<TextBox1 className="p-Services TextBo bpt" {...TextBoProps} {...TextBoCb} {...TextBoIoProps}/>
<TextBox1 className="p-Services TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<TextBox1 className="p-Services TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
</Flex1>
</Div1>
<Div1 className="p-Services Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<Flex1 className="p-Services Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Image1 className="p-Services Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<TextBox1 className="p-Services TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox1 className="p-Services TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox1 className="p-Services TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox1 className="p-Services TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox1 className="p-Services TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
</Flex1>
</Div1>
<Div1 className="p-Services Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}>
<Flex1 className="p-Services Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Image1 className="p-Services Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox1 className="p-Services TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox1 className="p-Services TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox1 className="p-Services TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox1 className="p-Services TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox1 className="p-Services TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Flex1>
</Div1>
</Flex1>
</Div1>
  </>);
}

import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { useDiv22Cb, useDiv23Cb, useFlex16Cb, useDiv24Cb, useDiv25Cb, useDiv28Cb, useFlex18Cb, useTextBox41Cb, useTextBox43Cb, useButton3Cb, useCarousel2Cb } from "../page-cbs/Projects";
import "../page-css/Projects.css";
import "../custom/Projects";

export default function Projects() {
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

  const Div22Props = useStore((state)=>state["Projects"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Projects"]["Div22"]);
const Div22Cb = useDiv22Cb()
const Div23Props = useStore((state)=>state["Projects"]["Div23"]);
const Div23IoProps = useIoStore((state)=>state["Projects"]["Div23"]);
const Div23Cb = useDiv23Cb()
const Flex16Props = useStore((state)=>state["Projects"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Projects"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Div24Props = useStore((state)=>state["Projects"]["Div24"]);
const Div24IoProps = useIoStore((state)=>state["Projects"]["Div24"]);
const Div24Cb = useDiv24Cb()
const Div25Props = useStore((state)=>state["Projects"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["Projects"]["Div25"]);
const Div25Cb = useDiv25Cb()
const Div28Props = useStore((state)=>state["Projects"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["Projects"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Flex18Props = useStore((state)=>state["Projects"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Projects"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const TextBox41Props = useStore((state)=>state["Projects"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Projects"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox43Props = useStore((state)=>state["Projects"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Projects"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Button3Props = useStore((state)=>state["Projects"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Projects"]["Button3"]);
const Button3Cb = useButton3Cb()
const Carousel2Props = useStore((state)=>state["Projects"]["Carousel2"]);
const Carousel2IoProps = useIoStore((state)=>state["Projects"]["Carousel2"]);
const Carousel2Cb = useCarousel2Cb()

  return (<>
  <Div2 className="p-Projects Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}>
<TextBox2 className="p-Projects TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Div2>
<Div2 className="p-Projects Div23 bpt" {...Div23Props} {...Div23Cb} {...Div23IoProps}>
<Flex2 className="p-Projects Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Div2 className="p-Projects Div24 bpt" {...Div24Props} {...Div24Cb} {...Div24IoProps}>
<TextBox2 className="p-Projects TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Div2>
<Div2 className="p-Projects Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}>
<Button1 className="p-Projects Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Div2>
</Flex2>
</Div2>
<Div2 className="p-Projects Div28 bpt" {...Div28Props} {...Div28Cb} {...Div28IoProps}>
<Flex2 className="p-Projects Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Carousel className="p-Projects Carousel2 bpt" {...Carousel2Props} {...Carousel2Cb} {...Carousel2IoProps}/>
</Flex2>
</Div2>
  </>);
}

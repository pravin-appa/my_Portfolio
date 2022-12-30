import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useDivNavCb() {
	const onClick = useCallback(callbackFactory("DivNav", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlexNavCb() {
	const onClick = useCallback(callbackFactory("FlexNav", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLogoCb() {
	const onClick = useCallback(callbackFactory("Logo", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDivNavbarCb() {
	const onClick = useCallback(callbackFactory("DivNavbar", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlexnavbarCb() {
	const onClick = useCallback(callbackFactory("Flexnavbar", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBoxbarCb() {
	const onClick = useCallback(callbackFactory("TextBoxbar", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useText2Cb() {
	const onClick = useCallback(callbackFactory("Text2", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/Services"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useText3Cb() {
	const onClick = useCallback(callbackFactory("Text3", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/Projects"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useText4Cb() {
	const onClick = useCallback(callbackFactory("Text4", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useText5Cb() {
	const onClick = useCallback(callbackFactory("Text5", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDivhomeCb() {
	const onClick = useCallback(callbackFactory("Divhome", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv7Cb() {
	const onClick = useCallback(callbackFactory("Div7", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex7Cb() {
	const onClick = useCallback(callbackFactory("Flex7", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv8Cb() {
	const onClick = useCallback(callbackFactory("Div8", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv9Cb() {
	const onClick = useCallback(callbackFactory("Div9", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextCb() {
	const onClick = useCallback(callbackFactory("Text", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton1Cb() {
	const onClick = useCallback(callbackFactory("Button1", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton2Cb() {
	const onClick = useCallback(callbackFactory("Button2", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage4Cb() {
	const onClick = useCallback(callbackFactory("Image4", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox14Cb() {
	const onClick = useCallback(callbackFactory("TextBox14", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv10Cb() {
	const onClick = useCallback(callbackFactory("Div10", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex8Cb() {
	const onClick = useCallback(callbackFactory("Flex8", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv11Cb() {
	const onClick = useCallback(callbackFactory("Div11", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv12Cb() {
	const onClick = useCallback(callbackFactory("Div12", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox15Cb() {
	const onClick = useCallback(callbackFactory("TextBox15", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex9Cb() {
	const onClick = useCallback(callbackFactory("Flex9", "Home", "/Home", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage5Cb() {
	const onClick = useCallback(callbackFactory("Image5", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage6Cb() {
	const onClick = useCallback(callbackFactory("Image6", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage8Cb() {
	const onClick = useCallback(callbackFactory("Image8", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage9Cb() {
	const onClick = useCallback(callbackFactory("Image9", "Home", "/Home", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
import { useEffect } from "react";
import { Text } from "react-native";

export default function FirstComponent() {

    useEffect(() => {
        console.log("First component updated")
    })

    return (
        <Text>First component</Text>
    )
}
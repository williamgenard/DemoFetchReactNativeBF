import { useEffect } from "react";
import { Text } from "react-native";

export default function SecondComponent() {

    useEffect(() => {
        console.log("Second component updated")

        return () => {
            console.log("Second component detroyed")
        }
    })

    return (
        <Text>Second component</Text>
    )
}
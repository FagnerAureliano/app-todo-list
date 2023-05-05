import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerTop: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        justifyContent: "center"
    },
    containerBotton: {
        flex: 3,
        backgroundColor: '#262626',
    },
    logoImage: {
        width: 110.34,
        height: 32,
        alignSelf: "center"
    },
    contadores: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        alignSelf: "center",
    },
    emptyList: {
        top: "5%",
        justifyContent: "center",
        borderTopWidth: 0.4,
        width: "80%",
        alignSelf: "center",
        borderColor: "#808080",
        alignItems: "center",
        paddingTop: 15
    },
    emptyListTextOne: {
        fontSize: 14,
        fontWeight: "700",
        color: "#808080",
    },
    emptyListTextTwo: {
        fontSize: 14,
        color: "#808080"
    }
});

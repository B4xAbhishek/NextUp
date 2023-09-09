import React, {useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Platform  } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { Camera } from "expo-camera";

const UploadPhotoNotAdded = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      // You can do something with the taken photo, like saving or displaying it.
      console.log("Photo taken:", photo);
    }
  };

  return (
    <View style={styles.uploadPhotoNotAdded}>
      <Text style={styles.signInWithContainer}>
        <Text style={styles.signInWithContainer1}>
          <Text style={styles.upload}>{`Upload
`}</Text>
          <Text style={styles.photo}>Photo 1</Text>
        </Text>
      </Text>
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Pressable style={styles.wrapper} onPress={takePicture}>
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
        </Pressable>
      </View>
     
      {hasPermission === false && (
        <Text style={styles.permissionText}>Camera permission is not granted</Text>
      )}
      {Platform.OS === "web" && (
        <Text style={styles.webMessage}>Camera is not available on the web</Text>
      )}
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        ref={(ref) => setCameraRef(ref)}
      />
      <View style={styles.homeIndicatorLightWrapper}>
        <View style={styles.homeIndicatorLight}>
          <View style={styles.homeIndicatorLight} />
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("UploadPhotoAdded")}
        // onPress={takePicture}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-53.png")}
        />
      </Pressable>
      <View style={[styles.rectangleCopy3Parent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
        <Text style={styles.continue}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    height: 7,
    top: 110,
    backgroundColor: Color.colorRoyalblue,
    left: 26,
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 311,
    position: "absolute",
  },
  upload: {
    fontWeight: "100",
    fontFamily: FontFamily.robotoThin,
  },
  photo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  signInWithContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  signInWithContainer: {
    top: 135,
    fontSize: FontSize.size_13xl,
    lineHeight: 42,
    textAlign: "left",
    width: 311,
    alignItems: "center",
    display: "flex",
    color: Color.othersWhite,
    left: 26,
    position: "absolute",
  },
  rectangle: {
    top: -1,
    left: -1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
    position: "absolute",
  },
  path2Icon: {
    top: 9,
    left: 8,
    width: 14,
    height: 12,
    position: "absolute",
  },
  group: {
    top: 62,
    left: 21,
    width: 30,
    height: 30,
    position: "absolute",
  },
  homeIndicatorLight: {
    top: 0,
    height: 20,
    width: 375,
    left: 0,
    position: "absolute",
  },
  homeIndicator: {
    top: 8,
    left: 120,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 4,
    position: "absolute",
  },
  homeIndicatorLightWrapper: {
    top: 792,
    height: 20,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangle1: {
    borderRadius: Border.br_13xl,
    width: 323,
    opacity: 0.08,
  },
  rectangleCopy: {
    borderRadius: Border.br_23xl,
    width: 154,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 64,
    top: 296,
    width: 247,
    height: 248,
    position: "absolute",
  },
  rectangleCopy3: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorRoyalblue,
    height: 48,
    top: 0,
    left: 0,
  },
  continue: {
    top: 16,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    textAlign: "center",
    justifyContent: "center",
    height: 16,
    left: 0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    width: 311,
    alignItems: "center",
    display: "flex",
    color: Color.othersWhite,
    position: "absolute",
  },
  rectangleCopy3Parent: {
    top: 724,
    left: 32,
    opacity: 0.37,
  },
  uploadPhotoNotAdded: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default UploadPhotoNotAdded;

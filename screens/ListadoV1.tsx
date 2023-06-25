import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ListadoV1 = () => {
  return (
    <View style={styles.listadoV1}>
      <View style={styles.listadoV1Child} />
      <Text style={styles.seleccionarEjercicio}>Seleccionar ejercicio</Text>
      <View style={styles.searchbar}>
        <View style={styles.content}>
          <View style={styles.magnifyingglass}>
            <Text style={[styles.magnifyingglass1, styles.grupoMuscularTypo]}>
              􀊫
            </Text>
          </View>
          <Text style={styles.placeholderLabel}>Search</Text>
        </View>
      </View>
      <View style={[styles.buttons, styles.buttonsLayout]}>
        <Text style={[styles.grupoMuscular, styles.grupoMuscularTypo]}>
          Button
        </Text>
      </View>
      <View style={[styles.buttons1, styles.buttonsLayout]}>
        <Text style={[styles.grupoMuscular, styles.grupoMuscularTypo]}>
          Button
        </Text>
      </View>
      <View style={[styles.contactList, styles.contactLayout]}>
        <Image
          style={styles.contactListChild}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <View style={styles.contactListItem} />
        <View style={[styles.janeCooperParent, styles.parentPosition]}>
          <Text style={[styles.janeCooper, styles.textPosition]}>
            Jane Cooper
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(270) 555-0117</Text>
        </View>
      </View>
      <View style={[styles.contactList1, styles.contactLayout]}>
        <Image
          style={styles.contactListChild}
          contentFit="cover"
          source={require("../assets/ellipse-211.png")}
        />
        <View style={styles.contactListItem} />
        <View style={[styles.devonLaneParent, styles.parentPosition]}>
          <Text style={[styles.janeCooper, styles.textPosition]}>
            Devon Lane
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(308) 555-0121</Text>
        </View>
      </View>
      <View style={[styles.contactList2, styles.contactLayout]}>
        <Image
          style={styles.contactListChild}
          contentFit="cover"
          source={require("../assets/ellipse-212.png")}
        />
        <View style={styles.contactListItem} />
        <View style={[styles.darrellStewardParent, styles.parentPosition]}>
          <Text style={[styles.janeCooper, styles.textPosition]}>
            Darrell Steward
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(684) 555-0102</Text>
        </View>
      </View>
      <View style={[styles.contactList3, styles.contactLayout]}>
        <Image
          style={styles.contactListChild}
          contentFit="cover"
          source={require("../assets/ellipse-213.png")}
        />
        <View style={styles.contactListItem} />
        <View style={[styles.devonLaneParent, styles.parentPosition]}>
          <Text style={[styles.janeCooper, styles.textPosition]}>
            Devon Lane
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(704) 555-0127</Text>
        </View>
      </View>
      <View style={[styles.contactList4, styles.contactLayout]}>
        <Image
          style={styles.contactListChild}
          contentFit="cover"
          source={require("../assets/ellipse-214.png")}
        />
        <View style={styles.contactListItem} />
        <View style={[styles.courtneyHenryParent, styles.parentPosition]}>
          <Text style={[styles.janeCooper, styles.textPosition]}>
            Courtney Henry
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(505) 555-0125</Text>
        </View>
      </View>
      <View style={[styles.contactList5, styles.contactLayout]}>
        <Image
          style={styles.contactListChild}
          contentFit="cover"
          source={require("../assets/ellipse-215.png")}
        />
        <View style={styles.contactListItem} />
        <View style={[styles.wadeWarrenParent, styles.parentPosition]}>
          <Text style={[styles.janeCooper, styles.textPosition]}>
            Wade Warren
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(225) 555-0118</Text>
        </View>
      </View>
      <View style={[styles.contactList6, styles.contactLayout]}>
        <Image
          style={styles.contactListChild}
          contentFit="cover"
          source={require("../assets/ellipse-216.png")}
        />
        <View style={styles.contactListItem} />
        <View style={[styles.bessieCooperParent, styles.parentPosition]}>
          <Text style={[styles.janeCooper, styles.textPosition]}>
            Bessie Cooper
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(406) 555-0120</Text>
        </View>
      </View>
      <View style={[styles.contactList7, styles.contactLayout]}>
        <Image
          style={styles.contactListChild}
          contentFit="cover"
          source={require("../assets/ellipse-217.png")}
        />
        <View style={styles.contactListItem} />
        <View style={[styles.devonLaneParent, styles.parentPosition]}>
          <Text style={[styles.janeCooper, styles.textPosition]}>
            Robert Fox
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(480) 555-0103</Text>
        </View>
      </View>
      <View style={[styles.contactList8, styles.contactLayout]}>
        <Image
          style={styles.contactListChild}
          contentFit="cover"
          source={require("../assets/ellipse-218.png")}
        />
        <View style={styles.contactListItem} />
        <View style={[styles.jacobJonesParent, styles.parentPosition]}>
          <Text style={[styles.janeCooper, styles.textPosition]}>
            Jacob Jones
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(702) 555-0122</Text>
        </View>
      </View>
      <View style={[styles.contactList9, styles.contactLayout]}>
        <Image
          style={styles.contactListChild}
          contentFit="cover"
          source={require("../assets/ellipse-219.png")}
        />
        <View style={styles.contactListItem} />
        <View style={[styles.wadeWarrenParent, styles.parentPosition]}>
          <Text style={[styles.janeCooper, styles.textPosition]}>
            Jenny Wilson
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(239) 555-0108</Text>
        </View>
      </View>
      <Image
        style={styles.ic24arrowleftIcon}
        contentFit="cover"
        source={require("../assets/ic24arrowleft.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  grupoMuscularTypo: {
    textAlign: "center",
    fontWeight: "500",
  },
  buttonsLayout: {
    transform: [
      {
        rotate: "-0.19deg",
      },
    ],
    paddingVertical: 5,
    paddingHorizontal: 30,
    height: 25,
    width: 105,
    backgroundColor: Color.darkslategray_100,
    borderRadius: 40,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  contactLayout: {
    height: 60,
    width: 375,
    left: 8,
    backgroundColor: Color.gray_200,
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition: {
    top: 10,
    left: 63,
    height: 40,
    position: "absolute",
  },
  textPosition: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 18,
    top: "50%",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  listadoV1Child: {
    top: 0,
    width: 390,
    backgroundColor: Color.gray_200,
    left: 0,
    position: "absolute",
    height: 844,
  },
  seleccionarEjercicio: {
    marginLeft: -86,
    top: 39,
    left: "50%",
    fontSize: 16,
    fontFamily: FontFamily.interRegular,
    width: 271,
    height: 31,
    textAlign: "left",
    color: Color.textWhite,
    position: "absolute",
  },
  magnifyingglass1: {
    height: "100%",
    top: "0%",
    left: "0%",
    fontSize: 18,
    lineHeight: 50,
    fontFamily: FontFamily.sFProDisplayMedium,
    display: "flex",
    justifyContent: "center",
    color: Color.labelColorsLCLSecondary,
    textAlign: "center",
    fontWeight: "500",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  magnifyingglass: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  placeholderLabel: {
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.defaultSizeBody,
    fontSize: FontSize.defaultSizeBody_size,
    color: Color.labelColorsLCLSecondary,
    textAlign: "left",
    flex: 1,
  },
  content: {
    alignSelf: "stretch",
    borderRadius: 10,
    backgroundColor: Color.systemMaterialsSMLThick,
    height: 36,
    padding: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  searchbar: {
    top: 83,
    left: 36,
    width: 331,
    height: 44,
    position: "absolute",
  },
  grupoMuscular: {
    fontSize: 17,
    lineHeight: 30,
    fontFamily: FontFamily.gilroyMedium,
    textAlign: "center",
    fontWeight: "500",
    color: Color.textWhite,
  },
  buttons: {
    top: 150,
    left: 67,
  },
  buttons1: {
    top: 151,
    left: 215,
  },
  contactListChild: {
    left: 15,
    width: 40,
    height: 40,
    top: "50%",
    marginTop: -20,
    position: "absolute",
  },
  contactListItem: {
    right: 16,
    bottom: 0,
    backgroundColor: Color.gray_100,
    height: 1,
    left: 63,
    position: "absolute",
  },
  janeCooper: {
    marginTop: -20,
    lineHeight: 18,
    fontSize: FontSize.defaultSizeBody_size,
    color: Color.textWhite,
  },
  text: {
    marginTop: 2,
    fontSize: FontSize.size_sm,
    color: Color.textLight,
  },
  janeCooperParent: {
    width: 97,
  },
  contactList: {
    top: 189,
  },
  devonLaneParent: {
    width: 96,
  },
  contactList1: {
    top: 249,
  },
  darrellStewardParent: {
    width: 116,
  },
  contactList2: {
    top: 309,
  },
  contactList3: {
    top: 369,
  },
  courtneyHenryParent: {
    width: 117,
  },
  contactList4: {
    top: 429,
  },
  wadeWarrenParent: {
    width: 101,
  },
  contactList5: {
    top: 489,
  },
  bessieCooperParent: {
    width: 110,
  },
  contactList6: {
    top: 549,
  },
  contactList7: {
    top: 609,
  },
  jacobJonesParent: {
    width: 98,
  },
  contactList8: {
    top: 669,
  },
  contactList9: {
    top: 729,
  },
  ic24arrowleftIcon: {
    top: 22,
    left: 19,
    width: 24,
    height: 24,
    position: "absolute",
  },
  listadoV1: {
    backgroundColor: Color.textWhite,
    overflow: "hidden",
    height: 844,
    width: "100%",
    flex: 1,
  },
});

export default ListadoV1;

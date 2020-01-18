// @flow
import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import {
  SubtitleText, BodyText, SearchResultTopText,
} from "../../components/Typography"
import Colors from "../../constants/Colors"
import Shadow from "../../lib/Shadow"
import { LightButton } from '../../components/Button'

const styles = StyleSheet.create({
  areaInfo: {
    alignContent: `flex-start`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    marginBottom: 20,
  },
  cardHeader: {
    backgroundColor: Colors.cardHeader,
    borderRadius: 10,
    color: Colors.cardBackground,
    marginBottom: 5,
    padding: 20,
    ...Shadow(2),
  },
  cardList: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    marginTop: 5,
    padding: 20,
    ...Shadow(2),
  },
  seatingMapButton: {
    alignSelf: `auto`,
    marginTop: 5,
  },
})

const studySpaceNames = [`Student Centre `]
// remove the name of the studyspace from the name
// of the map if it is present because it's just redundant
// e.g. Student Centre Level 1 => Level 1
const fixNames = ({ name, ...otherProps }) => ({
  ...otherProps,
  name: name.replace(new RegExp(`(${studySpaceNames.join(`|`)})`), ``),
})

class LiveSeatingMapList extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    maps: PropTypes.arrayOf(PropTypes.shape()),
    surveyId: PropTypes.number.isRequired,
  }

  static defaultProps = {
    maps: [],
  }

  openLiveMap = ({ name, surveyId, mapId }) => () => {
    const { navigation } = this.props
    navigation.navigate(`LiveSeatingMap`, { name, surveyId, mapId })
  }

  renderMapInfo = ({
    id, name, total, occupied,
  }) => {
    const { surveyId } = this.props
    return (
      <View key={id} style={styles.areaInfo}>
        <SearchResultTopText>
          {name}
        </SearchResultTopText>
        <BodyText>
          {`${(total - occupied)} seats free (total: ${total})`}
        </BodyText>
        <LightButton
          onPress={this.openLiveMap({ name, mapId: id, surveyId })}
          style={styles.seatingMapButton}
        >
          View Live Seating Map
        </LightButton>
      </View>
    )
  }

  render() {
    const { maps } = this.props
    const hasMaps = maps && Array.isArray(maps)
    if (!hasMaps) {
      return null
    }

    const mapsList = maps.map(fixNames).map(this.renderMapInfo)

    return (
      <View style={styles.liveSeatingMap}>
        <SubtitleText style={styles.cardHeader}>Areas</SubtitleText>
        <View style={styles.cardList}>{mapsList}</View>
      </View>
    )
  }
}

export default LiveSeatingMapList

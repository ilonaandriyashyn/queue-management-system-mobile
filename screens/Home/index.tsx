import React from 'react'
import { StyleSheet, View } from 'react-native'
import BoxList from '../../components/BoxList'
import { palette } from '../../helpers/theme'
import { useAppDispatch } from '../../store/hooks'
import { setOffice } from '../../store/service/slice'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type RootStackParamList } from '../../App'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.gov.blue.dark,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    color: 'red',
    backgroundColor: 'blue'
  }
})

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ceska posta'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Urad'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ministerstvo'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d472',
    title: 'Ministerstvo'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d272',
    title: 'Ministerstvo'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e296d72',
    title: 'Ministerstvo'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e294td72',
    title: 'Ministerstvo'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dr72',
    title: 'Ministerstvo'
  }
]

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Homepage({ navigation }: Props) {
  const dispatch = useAppDispatch()
  return (
    <View style={styles.container}>
      <BoxList
        data={data}
        onSelectItem={(id: string) => {
          dispatch(setOffice(id))
          navigation.navigate('OfficeAddress', { officeId: id })
        }}
      />
    </View>
  )
}

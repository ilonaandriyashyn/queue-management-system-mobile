import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { palette } from '../../helpers/theme'
import BoxList from '../../components/BoxList'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type RootStackParamList } from '../../App'
import { useAppDispatch } from '../../store/hooks'
import { setService } from '../../store/service/slice'
import { useQuery } from 'react-query'
import { getServices, type Services as ServicesType } from '../../requests/services'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.gov.blue.dark,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

type Props = NativeStackScreenProps<RootStackParamList, 'Services'>

export default function Services({ route, navigation }: Props) {
  const dispatch = useAppDispatch()
  const organizationId = route.params.organizationId
  const officeId = route.params.officeId

  const [services, setServices] = useState<ServicesType>([])
  useQuery('get_offices', async () => await getServices(officeId), {
    onSuccess: (response) => {
      setServices(response)
    }
  })

  return (
    <View style={styles.container}>
      <BoxList
        data={services}
        onSelectItem={(id: string) => {
          dispatch(setService(id))
          navigation.navigate('QueueInfo')
        }}
      />
    </View>
  )
}
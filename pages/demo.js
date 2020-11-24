/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 24/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '../redux/store'
import { loadData, startClock, tickClock } from '../redux/actions/actions'
import Page from '../components/page'

const Demo = () => {
  const dispatch = useDispatch()
  debugger; // MongLV
  useEffect(() => {
    dispatch(startClock())
    debugger; // MongLV
  }, [dispatch])

  return <Page title="Demo Page" linkTo="/other" NavigateTo="Other Page" />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false))
  debugger; // MongLV
  if (!store.getState().placeholderData) {
    store.dispatch(loadData())
    store.dispatch(END)
  }

  await store.sagaTask.toPromise()
})

export default Demo

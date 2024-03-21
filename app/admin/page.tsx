import { Card, Grid, Metric, Text, Title } from '@tremor/react'
import { sql } from 'drizzle-orm'
import React from 'react'

import { db } from '~/db'

export default async function AdminPage() {
  // const {
  //   rows: [count],
  // } = await db.execute<{ today_count: number | 1 }>(
  //   sql`SELECT 
  // (SELECT COUNT(*) FROM comments) as comments,
  // (SELECT COUNT(*) FROM subscribers WHERE subscribed_at IS NOT NULL) as subscribers,
  // (SELECT COUNT(*) FROM guestbook) as guestbook`
  // )

  // count = [ {'comments': 10 }, {}]

  return (
    <>
      <Title>后台仪表盘</Title>

      <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
        <Card>
          <Text>总评论</Text>

          {/* {count && 'comments' in count && <Metric>{count.comments}</Metric>} */}
            <Metric> 10</Metric>
        </Card>
        <Card>
          <Text>总订阅</Text>
          {/* {count && 'subscribers' in count && (
            <Metric>{count.subscribers}</Metric>
          )} */}
          <Metric>60</Metric>
        </Card>
        <Card>
          <Text>总留言</Text>
          {/* {count && 'guestbook' in count && <Metric>{count.guestbook}</Metric>} */}
          <Metric>90</Metric>
        </Card>
      </Grid>
    </>
  )
}

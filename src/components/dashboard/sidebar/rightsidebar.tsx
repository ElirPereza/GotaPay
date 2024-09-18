import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const RightSidebar = () => {
    const theme = "dark"
  return (
        //Right Sidebar
        <aside className={`w-80 p-4 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
          <Card>
            <CardHeader>
              <CardTitle>🔥 Available Now</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">How to use the new version of the admin dashboard?</h3>
              <p className="text-sm text-gray-500 mb-4">Takes 4 minutes to learn</p>
              <p className="text-sm mb-4">Learn how to effectively navigate and utilize the updated features of the admin dashboard with this concise guide.</p>
              <Button>Watch</Button>
            </CardContent>
          </Card>
        </aside>
  )
}

export default RightSidebar
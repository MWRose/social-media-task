import { useEasybase } from 'easybase-react';
import { useState, useEffect } from "react"

import { prevNext } from '../lib/utils'

const refreshSecs = 0.5

export default function CorsCheck(props) {
    const [good, setGood] = useState(null)

    const {
        isUserSignedIn,
        addRecord,
        configureFrame,
        sync
    } = useEasybase();

    async function update() {
        const record = {
            insertAtEnd: true,
            newRecord: {},
            tableName: "METADATA"
        }
        if (isUserSignedIn()) {
            setGood(true)
            if (!(await addRecord(record)).success) {
                console.log("failed to add records")
                setGood(false)
            }
            if (!configureFrame({ tableName: "METADATA" }).success) {
                console.log("failed to configure frame")
                setGood(false)
            }
            if (!(await sync()).success) {
                console.log("failed to sync")
                setGood(false)
            }
        }
    }

    useEffect(() => {
        if (good === null || good === false) { 
            update() 
        } else {
            const timer = setTimeout(() => { update() }, 1000 * refreshSecs)
            // Clear timeout if the component is unmounted
            return () => clearTimeout(timer)
        }
    })



    if (good) {
        return (
            <div style={{ textAlign: "center" }}>
                <p>Setup looks good! Please continue.</p>
                { prevNext(props)}
            </div>
        )
    } else {
        return (
            <div style={{ textAlign: "center" }}>
                <p>Setup doesn't look good. Please talk with the supervisor.</p>
                { prevNext(props)}
            </div>
        )
    }
}
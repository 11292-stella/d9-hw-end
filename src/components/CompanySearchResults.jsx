import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setSearchResultsAction } from "../redux/action"

const CompanySearchResults = () => {
  const params = useParams()

  const dispatch = useDispatch()
  const jobs = useSelector((state) => {
    state.search.results
  })

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company="

  useEffect(() => {
    getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params.companyName])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName)
      if (response.ok) {
        const { data } = await response.json()
        dispatch(setSearchResultsAction(data))
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults

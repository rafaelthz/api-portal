'use client'

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { CardTitle, CardDescription, CardHeader, CardFooter, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PaginationItem, PaginationLink, PaginationContent, Pagination } from "@/components/ui/pagination"
import { ApiData } from "../../types"
import { ChangeEvent, useEffect, useState } from "react"

interface ApiListProps {
  data: ApiData[];
}

export function ApiList({ data }: ApiListProps) {
  const [apiData, setApiData] = useState<ApiData[]>([])
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const apisPerPage = 9

  useEffect(() => {
    const dataSearch = search ? data.filter(data => data.api_name.includes(search) || data.api_description.includes(search)) : data
    const dataPaginate = dataSearch.slice(
      (currentPage - 1) * apisPerPage,
      (currentPage - 1) * apisPerPage + apisPerPage
    )

    setApiData(dataPaginate)
  }, [data, currentPage, apisPerPage, search])

  const paginationNumbers = [] //todo: refresh after search
  for (let i = 1; i <= Math.ceil(data.length / apisPerPage); i++) {
    paginationNumbers.push(i)
  }

  function handlePagination(pageNumber: number) {
    setCurrentPage(pageNumber)
    setApiData(apiData.slice(
      (currentPage - 1) * apisPerPage,
      (currentPage - 1) * apisPerPage + apisPerPage
    ))
  }

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    setCurrentPage(1)
  }

  function mapStringToAPIRoute(input: string): string {
    const formattedInput = input.toLowerCase().trim()
    return `/api/${formattedInput.replace(/\s+/g, '-')}`
  }

  return (
    <>
      <div className="flex items-center justify-start gap-4 mb-6">
        <h2 className="text-2xl font-bold">Lista de APIs</h2>
        <div>
          <Input
            className="h-9 w-96 px-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Busque por APIs"
            type="search"
            onChange={onSearchInputChanged}
            value={search}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apiData.map((api: ApiData, index: number) =>
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{api.api_name}</CardTitle>
                <Badge className="px-2 py-1 text-xs" variant="secondary">
                  GET
                </Badge>
              </div>
              <div className="mt-2">
                <span className="text-gray-500">{mapStringToAPIRoute(api.api_name)}</span>
              </div>
              <CardDescription>{api.api_description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link className="text-blue-500 hover:underline" href="#">
                Ver Documentação
              </Link>
            </CardFooter>
          </Card>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            {paginationNumbers.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink onClick={() => handlePagination(pageNumber)} isActive={currentPage === pageNumber}>{pageNumber}</PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}
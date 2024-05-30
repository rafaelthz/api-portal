'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { PaginationItem, PaginationLink, PaginationContent, Pagination } from "@/components/ui/pagination"
import { ApiData } from "../../types"
import { ChangeEvent, useEffect, useState } from "react"

interface ApiTableProps {
  data: ApiData[];
}

export default function ApiTable({ data }: ApiTableProps) {
  const [apiData, setApiData] = useState<ApiData[]>([])
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const apisPerPage = 5

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
      <div className="flex items-center">
        <div className="flex items-center justify-start gap-4">
          <h2 className="text-2xl font-bold">Lista de APIs</h2>
          <Input
            className="h-9 w-96 px-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Busque por APIs"
            type="search"
            onChange={onSearchInputChanged}
            value={search}
          />
        </div>
        <Button className="ml-auto" size="sm">
          Adicionar API
        </Button>
      </div>
      <div className="bg-white rounded-md border-gray-100 border-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Endpoint</TableHead>
              <TableHead>Métodos</TableHead>
              <TableHead>Auth</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiData.map((api, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{api.api_name}</TableCell>
                <TableCell className="text-gray-600">{api.api_description}</TableCell>
                <TableCell>{mapStringToAPIRoute(api.api_name)}</TableCell>
                <TableCell>
                  <Badge className="px-2 py-1 text-xs" variant="secondary">
                    GET
                  </Badge>
                </TableCell>
                <TableCell>Bearer Token</TableCell>
                <TableCell className="text-green-500">Ativo</TableCell>
                <TableCell className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Editar
                  </Button>
                  <Button size="sm" variant="destructive">
                    Deletar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-center mt-4 mb-8">
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
      </div>
    </>
  )
}
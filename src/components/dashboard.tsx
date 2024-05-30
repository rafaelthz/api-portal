'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { JSX, ClassAttributes, HTMLAttributes } from "react"

export default function Dashboard() {
  return (
    <>
      <h1 className="font-semibold text-lg md:text-2xl">Dashboard de APIs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>API Requests</CardTitle>
            <CardDescription>Total de requisições nos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tempo de Resposta</CardTitle>
            <CardDescription>Média do tempo de resposta de requisições</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Erros</CardTitle>
            <CardDescription>Total de erros nos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart className="aspect-[4/3]" />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Relatório de Uso</CardTitle>
            <CardDescription>Veja detalhadamente o uso das suas APIs</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>API</TableHead>
                  <TableHead>Requisições</TableHead>
                  <TableHead>Erros</TableHead>
                  <TableHead>Média do tempo de resposta</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Users API</TableCell>
                  <TableCell>12,345</TableCell>
                  <TableCell>123</TableCell>
                  <TableCell>50ms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Product API</TableCell>
                  <TableCell>8,765</TableCell>
                  <TableCell>87</TableCell>
                  <TableCell>75ms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Order API</TableCell>
                  <TableCell>5,432</TableCell>
                  <TableCell>54</TableCell>
                  <TableCell>100ms</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Métricas de Performance</CardTitle>
            <CardDescription>Monitore a performance de suas APIs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium">Tempo de atividade das APIs</h3>
                  <p className="text-gray-500">Porcentagem de tempo em que as APIs estão disponíveis</p>
                </div>
                <div className="text-2xl font-bold">99.9%</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium">Latência das APIs</h3>
                  <p className="text-gray-500">Tempo médio de resposta para chamadas de APIs</p>
                </div>
                <div className="text-2xl font-bold">75ms</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium">Erros das APIs</h3>
                  <p className="text-gray-500">Total de erros das APIs nos últimos 30 dias</p>
                </div>
                <div className="text-2xl font-bold">264</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div >
    </>
  )
}

function BarChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Fev", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Abr", count: 150 },
          { name: "Mai", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="Bar chart"
      />
    </div>
  )
}

function LineChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Fev", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Abr", y: 100 },
              { x: "Mai", y: 26 },
              { x: "Jun", y: 132 },
            ],
          }
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

function PieChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Fev", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Abr", value: 150 },
          { id: "Mai", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
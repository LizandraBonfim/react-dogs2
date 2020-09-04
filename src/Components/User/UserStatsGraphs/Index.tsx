import React, {useEffect, useState} from "react";
import {VictoryPie, VictoryChart, VictoryBar} from 'victory';

import {Container, GraphItem, HeaderGraph} from './style';
import {Stats} from "../../../models/Index";

interface UserStatsGraphsProps {
  stats: Stats[];
}

const UserStatsGraphs: React.FC<UserStatsGraphsProps> = ({stats}) => {

  const [graph, setGraph] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {

    if (stats && stats.length === 0)
      return;

    const qtyAccess = stats
      .map(({qtdAcessos}: Stats) => Number(qtdAcessos))
      .reduce((prev, current) => prev + current)

    setTotal(qtyAccess);

    const graphData = stats.map(item => {
      return {
        x: item.nome,
        y: Number(item.qtdAcessos)
      }
    });

    setGraph(graphData);

  }, [stats]);

  return (
    <Container>
      <HeaderGraph>
        <p>Acessos: {total}</p>
      </HeaderGraph>
      <div>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{top: 20, bottom: 20, left: 80, right: 80}}
          style={{
            data: {
              fillOpacity: .9,
              stroke: '#fff',
              strokeWidth: 2
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </div>
      <GraphItem>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}>

          </VictoryBar>
        </VictoryChart>
      </GraphItem>
    </Container>
  )

}


export default UserStatsGraphs;

import React, {useContext, useEffect} from "react";
import useStats from "../../../Hooks/useStats";
import Loading from "../../../Shared/Loading/Index";
import Error from "../../../Shared/Error";
import {UserContext} from "../../UserContext/Index";
import Head from "../../../Shared/Head";
import UserStatsGraphs from "../UserStatsGraphs/Index";



const UserStats: React.FC = () => {

  const { user } = useContext(UserContext);
  const {getStats, stats, erro, loading} = useStats();



  useEffect(() => {

    async function requestStats() {

      if (!user)
        return;

      await getStats(user.id)
    }

    const promisse = requestStats();


  }, [user]);


  if (loading) return <Loading/>
  if (erro) return <Error error={erro}/>
  if (stats) return <React.Suspense fallback={<div></div>} >
    <Head title="Estatísticas" description="Estatísticas das fotos postadas" />
    <UserStatsGraphs stats={stats} />
  </React.Suspense>

  return null;

}

export default UserStats;

import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "../../components/destination-and-date-header";
import { apiService } from "../../lib/axios";

export function AlertsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function openCreateActivityModal() {
    // setIsCreateActivityModalOpen(true)
  }
  

  useEffect(() => {
    async function updateAlerts() {
      try {
        const response = await apiService.patch<{ updated: number }>('/alerts');
        console.log("updated:", response)
      } catch (error) {
        console.error('Erro ao carregar atualizar alertas:', error);
      }
    }

    updateAlerts();
  }, []);
  // function closeCreateActivityModal() {
  //   setIsCreateActivityModalOpen(false)
  // }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Alertas</h2>

            <button onClick={openCreateActivityModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus className="size-5" />
              Marcar todos como visto
            </button>
          </div>

          <Activities />
        </div>

      </main>

      {/* {isCreateActivityModalOpen && (
        <CreateActivityModal 
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )} */}
    </div>
  )
}
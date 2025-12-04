import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Folder, 
  Tag, 
  Clock,
  Plus,
  BookOpen,
  Calendar,
  Edit,
  Bell,
  ChevronRight,
  Code,
  Database,
  Globe,
  Terminal,
  BookMarked,
  Zap,
  Star,
  TrendingUp,
  Hash,
  Cpu,
  Layers
} from 'lucide-react';
import StatCard from '../components/common/StatCard';
import CategoryCard from '../components/common/CategoryCard';

const Home = () => {
  const [quickNote, setQuickNote] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Categorías de conocimiento
  const knowledgeCategories = [
    { id: 1, name: 'React', icon: <Code size={20} />, count: 15, color: 'bg-blue-100 text-blue-600' },
    { id: 2, name: 'JavaScript', icon: <FileText size={20} />, count: 22, color: 'bg-yellow-100 text-yellow-600' },
    { id: 3, name: 'TypeScript', icon: <Cpu size={20} />, count: 12, color: 'bg-blue-100 text-blue-600' },
    { id: 4, name: 'Node.js', icon: <Terminal size={20} />, count: 8, color: 'bg-green-100 text-green-600' },
    { id: 5, name: 'Bases de Datos', icon: <Database size={20} />, count: 10, color: 'bg-purple-100 text-purple-600' },
    { id: 6, name: 'Next.js', icon: <Globe size={20} />, count: 7, color: 'bg-gray-100 text-gray-600' },
  ];

  // Notas recientes
  const recentNotes = [
    { 
      id: 1, 
      title: 'React Hooks Avanzados: useMemo y useCallback', 
      category: 'React',
      excerpt: 'Profundizando en optimización de rendimiento con hooks avanzados, casos de uso prácticos y ejemplos reales de aplicación.',
      date: 'Hoy, 10:30',
      tags: ['react', 'hooks', 'performance', 'optimization'],
      favorite: true,
      priority: 'high'
    },
    { 
      id: 2, 
      title: 'TypeScript Generics y Utility Types', 
      category: 'TypeScript',
      excerpt: 'Explorando patrones avanzados con generics, conditional types y utility types como Pick, Omit, Partial y Required.',
      date: 'Ayer, 16:45',
      tags: ['typescript', 'generics', 'typing', 'advanced'],
      favorite: true,
      priority: 'medium'
    },
    { 
      id: 3, 
      title: 'Optimización de Queries SQL: Índices y Explain', 
      category: 'Bases de Datos',
      excerpt: 'Guía completa sobre creación de índices compuestos, uso de EXPLAIN ANALYZE y técnicas de normalización avanzada.',
      date: '15 Ene, 14:20',
      tags: ['sql', 'performance', 'indexes', 'database'],
      favorite: false,
      priority: 'high'
    },
    { 
      id: 4, 
      title: 'Server Components en Next.js 14', 
      category: 'Next.js',
      excerpt: 'Implementación de Server Components, streaming, y mejores prácticas para aplicaciones modernas de React.',
      date: '14 Ene, 11:10',
      tags: ['nextjs', 'react', 'server-components', 'ssr'],
      favorite: false,
      priority: 'medium'
    },
  ];

  // Recordatorios de estudio
  const studyReminders = [
    { id: 1, text: 'Completar tutorial de WebSockets y Socket.io', time: 'Hoy 16:00', priority: 'high' },
    { id: 2, text: 'Revisar Pull Request #45 en proyecto personal', time: 'Mañana 10:00', priority: 'medium' },
    { id: 3, text: 'Estudiar patrones de diseño: Observer y Pub/Sub', time: 'Esta semana', priority: 'low' },
    { id: 4, text: 'Actualizar documentación de API endpoints', time: 'Próximos días', priority: 'medium' },
  ];

  // Estadísticas
  const stats = [
    { label: 'Total notas', value: '86', icon: <FileText size={20} />, change: '+12%', color: 'bg-blue-50 border-blue-200' },
    { label: 'Categorías activas', value: '8', icon: <Folder size={20} />, change: '+2', color: 'bg-green-50 border-green-200' },
    { label: 'Notas favoritas', value: '24', icon: <Star size={20} />, change: '+5', color: 'bg-yellow-50 border-yellow-200' },
    { label: 'Actividad semanal', value: '18/día', icon: <TrendingUp size={20} />, change: '+8%', color: 'bg-purple-50 border-purple-200' },
  ];

  // Tags populares
  const popularTags = [
    { name: 'react', count: 42 },
    { name: 'javascript', count: 38 },
    { name: 'typescript', count: 25 },
    { name: 'nodejs', count: 18 },
    { name: 'sql', count: 15 },
    { name: 'performance', count: 12 },
    { name: 'hooks', count: 10 },
    { name: 'nextjs', count: 9 },
  ];

  const handleSaveNote = () => {
    if (quickNote.trim()) {
      console.log('Nota guardada:', quickNote);
      setQuickNote('');
      // Aquí iría la lógica para guardar en estado/API
    }
  };

  const getPriorityBadge = (priority) => {
    const styles = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-green-100 text-green-800 border-green-200'
    };
    return styles[priority] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100 rounded-lg">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Mi Knowledge Base</h1>
                <p className="text-gray-600 mt-1">Organiza y accede a todo tu conocimiento técnico</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar conceptos, código, notas..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition">
                <Plus size={20} />
                Nueva
              </button>
            </div>
          </div>

          {/* Acciones rápidas */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition font-medium">
              <Plus size={20} />
              Nueva nota
            </button>
            <button className="px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg flex items-center gap-2 transition font-medium">
              <Folder size={20} />
              Nueva categoría
            </button>
            <button className="px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg flex items-center gap-2 transition font-medium">
              <Tag size={20} />
              Agregar tags
            </button>
            <button className="px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg flex items-center gap-2 transition font-medium">
              <Bell size={20} />
              Recordatorio
            </button>
          </div>
        </header>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <StatCard
            key={index}
            color={stat.color}
            icon={stat.icon}
            change={stat.change}
            value={stat.value}
            label={stat.label}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna principal - 2/3 */}
          <div className="lg:col-span-2 space-y-6">
            {/* Nota rápida */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Edit className="text-blue-600" />
                  Captura rápida de conocimiento
                </h2>
                <Zap className="text-gray-400" size={20} />
              </div>
              
              <textarea
                value={quickNote}
                onChange={(e) => setQuickNote(e.target.value)}
                placeholder="¿Qué concepto, patrón o código has aprendido hoy? Escribe aquí para guardarlo rápidamente..."
                rows="5"
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
              />
              
              <div className="flex flex-wrap justify-between items-center mt-4">
                <div className="flex gap-2 mb-3 md:mb-0">
                  <span className="text-sm text-gray-500 font-medium mr-2">Tags sugeridos:</span>
                  {['#concepto', '#código', '#patrón', '#syntax', '#ejemplo'].map(tag => (
                    <button 
                      key={tag}
                      onClick={() => setQuickNote(prev => `${prev} ${tag} `)}
                      className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={handleSaveNote}
                  disabled={!quickNote.trim()}
                  className={`px-5 py-2.5 rounded-lg font-medium transition ${quickNote.trim() 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                >
                  Guardar conocimiento
                </button>
              </div>
            </div>

            {/* Notas recientes */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Clock className="text-blue-600" />
                  Conocimiento reciente
                </h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition">
                  Ver todo <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="space-y-4">
                {recentNotes.map(note => (
                  <div key={note.id} className="group p-5 border border-gray-200 hover:border-blue-300 rounded-xl transition-all cursor-pointer hover:shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${note.category === 'React' ? 'bg-blue-100 text-blue-800' :
                            note.category === 'TypeScript' ? 'bg-blue-100 text-blue-800' :
                            note.category === 'Next.js' ? 'bg-gray-100 text-gray-800' :
                            'bg-purple-100 text-purple-800'}`}>
                            {note.category}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded border ${getPriorityBadge(note.priority)}`}>
                            {note.priority === 'high' ? 'Alta prioridad' : note.priority === 'medium' ? 'Media prioridad' : 'Baja prioridad'}
                          </span>
                          <span className="text-sm text-gray-500">{note.date}</span>
                          {note.favorite && (
                            <Star className="text-yellow-500" size={16} fill="currentColor" />
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                          {note.title}
                        </h3>
                        <p className="text-gray-600 mb-3 line-clamp-2">{note.excerpt}</p>
                      </div>
                      <BookMarked className="text-gray-400 group-hover:text-blue-500 transition mt-1" size={20} />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {note.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg flex items-center gap-1">
                          <Hash size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna lateral - 1/3 */}
          <div className="space-y-6">
            {/* Categorías */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Folder className="text-blue-600" />
                  Áreas de conocimiento
                </h2>
                <span className="text-sm text-gray-500">
                  {knowledgeCategories.length} categorías
                </span>
              </div>
              
              <div className="space-y-3">
                {knowledgeCategories.map(category => (
                  <CategoryCard
                  key={category.id}
                  color={category.color}
                  icon={category.icon}
                  name={category.name}
                  count={category.count}
                  />
                ))}
              </div>
              
              <button className="w-full mt-4 px-4 py-3 border border-dashed border-gray-300 hover:border-blue-400 rounded-lg text-gray-600 hover:text-blue-600 transition flex items-center justify-center gap-2 font-medium">
                <Plus size={20} />
                Crear nueva área
              </button>
            </div>

            {/* Recordatorios de estudio */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Bell className="text-blue-600" />
                  Próximo a estudiar
                </h2>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg transition">
                  <Plus className="text-gray-500" size={20} />
                </button>
              </div>
              
              <div className="space-y-3">
                {studyReminders.map(reminder => (
                  <div key={reminder.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Calendar className="text-blue-600" size={18} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">{reminder.text}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock size={12} />
                        {reminder.time}
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${reminder.priority === 'high' ? 'bg-red-500' : 
                      reminder.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition flex items-center justify-center gap-1">
                    Ver todos los objetivos de estudio
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Tags populares */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Tag className="text-blue-600" />
                  Tags populares
                </h2>
                <Layers className="text-gray-400" size={20} />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {popularTags.map(tag => (
                  <div 
                    key={tag.name}
                    className="group relative"
                  >
                    <button className="px-3 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-lg transition flex items-center gap-1.5">
                      <Hash size={14} />
                      <span className="font-medium">{tag.name}</span>
                      <span className="text-xs text-gray-500">({tag.count})</span>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <button className="text-gray-600 hover:text-gray-800 font-medium text-sm transition flex items-center justify-center gap-1">
                    Explorar todos los tags
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Acceso rápido */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6">
              <div className="text-white mb-4">
                <h3 className="text-xl font-bold mb-2">Acceso rápido</h3>
                <p className="text-blue-100 text-sm">
                  Accede rápidamente a lo más importante
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition flex flex-col items-center justify-center gap-2">
                  <Star size={20} />
                  <span className="text-sm font-medium">Favoritas</span>
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition flex flex-col items-center justify-center gap-2">
                  <TrendingUp size={20} />
                  <span className="text-sm font-medium">Tendencia</span>
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition flex flex-col items-center justify-center gap-2">
                  <FileText size={20} />
                  <span className="text-sm font-medium">Sin leer</span>
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition flex flex-col items-center justify-center gap-2">
                  <BookOpen size={20} />
                  <span className="text-sm font-medium">Tutoriales</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
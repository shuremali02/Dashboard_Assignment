import { DollarSign, TrendingUp, Target, BarChart3 } from "lucide-react";

export default function Revenue() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Revenue</h1>
            <p className="text-gray-600">Monitor your business income and growth</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$89,432</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">$23,450</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Target Met</p>
              <p className="text-2xl font-bold text-green-600">112%</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
        <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Revenue Analytics</h3>
        <p className="text-gray-500">This page is under development. Soon you'll be able to:</p>
        <ul className="text-gray-500 mt-3 space-y-1">
          <li>• Track revenue streams</li>
          <li>• Analyze growth patterns</li>
          <li>• Set revenue targets</li>
          <li>• Generate income reports</li>
        </ul>
      </div>
    </div>
  );
}
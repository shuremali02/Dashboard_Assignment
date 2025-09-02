import { BarChart3, TrendingUp, Target, PieChart } from "lucide-react";

export default function Profit() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <BarChart3 className="h-8 w-8 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Profit</h1>
            <p className="text-gray-600">Analyze your business profitability and margins</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Profit</p>
              <p className="text-2xl font-bold text-gray-900">$44,201</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">$11,000</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Profit Margin</p>
              <p className="text-2xl font-bold text-green-600">49.4%</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
        <PieChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Profit Analytics</h3>
        <p className="text-gray-500">This page is under development. Soon you'll be able to:</p>
        <ul className="text-gray-500 mt-3 space-y-1">
          <li>• Track profit margins</li>
          <li>• Analyze cost structures</li>
          <li>• Set profit targets</li>
          <li>• Generate profitability reports</li>
        </ul>
      </div>
    </div>
  );
}
  
import { TrendingUp, DollarSign, Calendar, AlertCircle } from "lucide-react";

export default function Expenses() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-orange-100 rounded-lg">
            <TrendingUp className="h-8 w-8 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Expenses</h1>
            <p className="text-gray-600">Track and manage your business expenses</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Expenses</p>
              <p className="text-2xl font-bold text-gray-900">$45,231</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">$12,450</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Over Budget</p>
              <p className="text-2xl font-bold text-red-600">$2,340</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
        <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Expenses Management</h3>
        <p className="text-gray-500">This page is under development. Soon you'll be able to:</p>
        <ul className="text-gray-500 mt-3 space-y-1">
          <li>• Track all business expenses</li>
          <li>• Categorize spending</li>
          <li>• Set budget limits</li>
          <li>• Generate expense reports</li>
        </ul>
      </div>
    </div>
  );
}
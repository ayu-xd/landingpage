import React from 'react'
import {
  FileText,
  UploadCloud,
  Sparkles,
  Clock,
  Send,
  MoreHorizontal,
  ExternalLink,
  Search,
} from 'lucide-react'

export function Mockup1Import() {
  return (
    <div className="relative mx-auto flex h-[350px] w-full max-w-lg items-center justify-center sm:h-[400px]">
      {/* Background abstract window */}
      <div className="absolute right-0 top-10 h-64 w-72 rounded-2xl border border-slate-200 bg-slate-50/50 opacity-50 shadow-sm sm:h-72 sm:w-80">
        <div className="flex h-8 w-full items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="h-4 w-1/2 rounded bg-slate-200" />
          <div className="h-20 w-full rounded-xl bg-slate-200" />
          <div className="h-20 w-full rounded-xl bg-slate-200" />
        </div>
      </div>

      {/* Foreground Widget */}
      <div className="relative z-10 -ml-12 flex w-72 flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] sm:-ml-20 sm:w-80 sm:p-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">Import leads</h3>
          <p className="mt-0.5 text-xs text-slate-500">From any source in seconds</p>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-3 transition-colors hover:bg-blue-50">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-900">Paste usernames</p>
            </div>
          </div>

          <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 transition-colors hover:bg-slate-50">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600">
              <UploadCloud className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-700">Upload CSV/Excel</p>
            </div>
          </div>

          <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 transition-colors hover:bg-slate-50">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-700">Auto-map columns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Mockup2Sequence() {
  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-lg items-center justify-center gap-4 sm:h-[450px] sm:gap-8">
      
      {/* Left: Sequence Timeline */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute bottom-0 top-0 w-0.5 bg-slate-100" />
        
        <div className="relative z-10 flex w-32 items-center gap-3 rounded-xl border border-blue-200 bg-white p-2.5 shadow-sm sm:w-40 sm:p-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white sm:h-8 sm:w-8">
            <Send className="h-3.5 w-3.5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 sm:text-sm">First DM</p>
          </div>
        </div>

        <div className="relative z-10 flex w-32 items-center gap-3 rounded-xl border border-slate-100 bg-white p-2.5 opacity-80 shadow-sm sm:w-40 sm:p-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 sm:h-8 sm:w-8">
            <Clock className="h-3.5 w-3.5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 sm:text-sm">Delay</p>
            <p className="text-[9px] font-medium text-slate-500 sm:text-[10px]">1 day</p>
          </div>
        </div>

        <div className="relative z-10 flex w-32 items-center gap-3 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm sm:w-40 sm:p-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white sm:h-8 sm:w-8">
            <Send className="h-3.5 w-3.5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 sm:text-sm">Follow-up</p>
          </div>
        </div>
      </div>

      {/* Right: Message Preview Bubble */}
      <div className="relative z-20 w-48 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] sm:w-60 sm:p-5">
        <div className="mb-3 flex items-center gap-2 sm:mb-4">
          <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">SM</div>
          <p className="text-xs font-bold text-slate-900 sm:text-sm">Sarah Miller</p>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-700 sm:text-xs">
          Hey <span className="font-bold text-blue-600">{'{{firstName}}'}</span> 👋
          <br/><br/>
          Saw your profile and really liked what you're doing with <span className="font-bold text-blue-600">{'{{company}}'}</span>.
          <br/><br/>
          Had a quick idea that might actually help you get more attention there. Down to chat?
        </p>
      </div>

    </div>
  )
}

export function Mockup3Analytics() {
  return (
    <div className="relative mx-auto flex h-[350px] w-full max-w-lg items-center justify-center sm:h-[400px]">
      
      {/* Background Card */}
      <div className="absolute right-4 top-12 w-56 rounded-2xl border border-slate-200 bg-slate-50 p-4 opacity-70 shadow-sm sm:right-10 sm:w-64 sm:p-5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700 text-xs">S</div>
          <h3 className="font-bold text-slate-900 text-sm">SaaS Founders</h3>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div>
            <p className="text-lg font-bold text-slate-900">142</p>
            <p className="text-[10px] text-slate-500">Sent</p>
          </div>
          <div>
            <p className="text-lg font-bold text-blue-600">19.7%</p>
            <p className="text-[10px] text-slate-500">Reply rate</p>
          </div>
        </div>
      </div>

      {/* Foreground Card */}
      <div className="absolute left-4 top-24 w-60 rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] sm:left-10 sm:w-72 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700 text-sm">A</div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Agency Owners</h3>
              <span className="inline-block rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-bold text-green-700 mt-0.5">Active</span>
            </div>
          </div>
          <MoreHorizontal className="h-4 w-4 text-slate-400" />
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-3xl font-bold text-slate-900">34.8%</p>
            <p className="mt-1 text-xs font-medium text-slate-500">Reply rate</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-green-600">312</p>
            <p className="mt-0.5 text-[10px] font-medium text-slate-500">Replies</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-blue-50 bg-blue-50/50 p-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
            <svg className="absolute inset-0 h-full w-full -rotate-90">
              <circle cx="50%" cy="50%" r="40%" className="stroke-slate-100" strokeWidth="2.5" fill="none" />
              <circle cx="50%" cy="50%" r="40%" className="stroke-blue-600" strokeWidth="2.5" fill="none" strokeDasharray="100" strokeDashoffset="40" />
            </svg>
            <span className="text-[8px] font-bold text-blue-700">60%</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">Queue active</p>
            <p className="text-[9px] text-slate-500">Sending next batch...</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export function Mockup4Inbox() {
  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-2xl items-center justify-center sm:h-[450px]">
      
      {/* Abstract Unified Inbox Widget */}
      <div className="flex h-[340px] w-full max-w-[560px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] sm:h-[400px]">
        
        {/* Left: Inbox List */}
        <div className="flex w-[160px] shrink-0 flex-col border-r border-slate-100 bg-[#F8FAFC] sm:w-[220px]">
          <div className="border-b border-slate-100 p-2.5 sm:p-3">
            <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1.5 shadow-sm sm:px-2.5 sm:py-2">
              <Search className="h-3 w-3 text-slate-400 sm:h-3.5 sm:w-3.5" />
              <span className="text-[9px] text-slate-400 sm:text-[11px]">Search leads...</span>
            </div>
            <div className="mt-2 flex gap-1 sm:gap-1.5">
              <div className="flex flex-1 items-center justify-between rounded bg-white px-1.5 py-1 shadow-sm ring-1 ring-slate-200 sm:px-2 sm:py-1.5">
                <span className="text-[8px] font-medium text-slate-600 sm:text-[10px]">All accounts</span>
              </div>
              <div className="flex flex-1 items-center justify-between rounded bg-white px-1.5 py-1 shadow-sm ring-1 ring-slate-200 sm:px-2 sm:py-1.5">
                <span className="text-[8px] font-medium text-slate-600 sm:text-[10px]">All campaigns</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Active Lead */}
            <div className="flex cursor-pointer gap-2 border-l-2 border-blue-600 bg-white p-2.5 shadow-sm sm:gap-3 sm:p-3.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700 text-[9px] sm:h-8 sm:w-8 sm:text-[11px]">M</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate text-[10px] font-bold text-slate-900 sm:text-[13px]">Michael Chen</p>
                  <p className="text-[8px] font-semibold text-blue-600 sm:text-[10px]">10m</p>
                </div>
                <p className="mt-0.5 truncate text-[9px] font-semibold text-slate-900 sm:text-[11px]">Yes, I'm interested!</p>
                <p className="mt-0.5 truncate text-[8px] text-slate-500 sm:text-[10px]">@michael.chen</p>
              </div>
            </div>

            {/* Unread Lead 1 */}
            <div className="flex cursor-pointer gap-2 border-b border-slate-50 p-2.5 hover:bg-white sm:gap-3 sm:p-3.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700 text-[9px] sm:h-8 sm:w-8 sm:text-[11px]">S</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate text-[10px] font-bold text-slate-900 sm:text-[13px]">Sarah Jenkins</p>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500 sm:h-2 sm:w-2" />
                    <p className="text-[8px] font-bold text-blue-600 sm:text-[10px]">1h</p>
                  </div>
                </div>
                <p className="mt-0.5 truncate text-[9px] font-bold text-slate-900 sm:text-[11px]">Can we hop on a quick call?</p>
                <p className="mt-0.5 truncate text-[8px] text-slate-500 sm:text-[10px]">@sarahj_agency</p>
              </div>
            </div>

            {/* Inactive Lead 2 */}
            <div className="flex cursor-pointer gap-2 border-b border-slate-50 p-2.5 hover:bg-white sm:gap-3 sm:p-3.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700 text-[9px] sm:h-8 sm:w-8 sm:text-[11px]">A</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate text-[10px] font-bold text-slate-900 sm:text-[13px]">Alex Rivera</p>
                  <p className="text-[8px] text-slate-400 sm:text-[10px]">2h</p>
                </div>
                <p className="mt-0.5 truncate text-[9px] text-slate-500 sm:text-[11px]">You: Sent a message</p>
                <p className="mt-0.5 truncate text-[8px] text-slate-500 sm:text-[10px]">@arivera_design</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Chat Pane */}
        <div className="flex flex-1 flex-col bg-white">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5 sm:px-4 sm:py-3.5">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700 text-[10px] sm:h-9 sm:w-9 sm:text-sm">M</div>
              <div>
                <p className="text-[11px] font-bold text-slate-900 sm:text-[14px]">Michael Chen</p>
                <p className="text-[8px] text-slate-500 sm:text-[11px]">@michael.chen</p>
              </div>
            </div>
            <ExternalLink className="h-3.5 w-3.5 text-slate-400 sm:h-4 sm:w-4" />
          </div>

          {/* Chat Body */}
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto bg-slate-50/50 p-3 sm:gap-4 sm:p-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="self-end max-w-[85%] mt-auto">
              <div className="rounded-2xl rounded-tr-none bg-blue-600 p-2.5 text-[10px] text-white shadow-sm sm:p-3 sm:text-[13px]">
                Hey Michael! Doing any cold outreach right now?
              </div>
            </div>

            <div className="flex gap-1.5 self-start max-w-[85%] sm:gap-2.5">
              <div className="hidden h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[8px] font-bold text-blue-700 sm:flex sm:h-7 sm:w-7 sm:text-[10px]">M</div>
              <div className="rounded-2xl rounded-tl-none border border-slate-100 bg-white p-2.5 text-[10px] text-slate-700 shadow-sm sm:p-3 sm:text-[13px]">
                Yeah, trying a few things.
              </div>
            </div>

            <div className="self-end max-w-[85%]">
              <div className="rounded-2xl rounded-tr-none bg-blue-600 p-2.5 text-[10px] text-white shadow-sm sm:p-3 sm:text-[13px]">
                DMDroid handles follow-ups automatically. Want a quick demo?
              </div>
            </div>

            <div className="flex gap-1.5 self-start max-w-[85%] sm:gap-2.5">
              <div className="hidden h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[8px] font-bold text-blue-700 sm:flex sm:h-7 sm:w-7 sm:text-[10px]">M</div>
              <div className="rounded-2xl rounded-tl-none border border-slate-100 bg-white p-2.5 text-[10px] font-bold text-slate-900 shadow-sm sm:p-3 sm:text-[13px]">
                Yes, I'm interested!
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-slate-100 bg-white p-2.5 sm:p-3.5">
            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5">
              <span className="text-[10px] text-slate-400 sm:text-[13px]">Reply...</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-white sm:h-7 sm:w-7 sm:rounded-lg">
                <Send className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

'use client';

import React, {useState, useRef, useEffect} from 'react';
import {ChevronDown, ArrowUpRight} from 'lucide-react';
import {cn} from '@/lib/utils';

export interface DropdownMenuItem {
  id: string;
  label: string;
  description?: string;
  meta?: string;
  accentColor?: string;
  onSelect?: () => void;
}

export interface DropdownMenuProps {
  triggerLabel: string;
  items: DropdownMenuItem[];
  activeItemId?: string;
  align?: 'left' | 'right';
  footerAction?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function DropdownMenu({
  triggerLabel,
  items,
  activeItemId,
  align = 'left',
  footerAction,
  className,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={cn('relative inline-block', className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          'inline-flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap shrink-0 py-1.5 px-2 rounded-md',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
          open
            ? 'text-[#315BE8] bg-[#F6F9FF]'
            : 'text-[#17243B] hover:text-[#315BE8]'
        )}
      >
        <span>{triggerLabel}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-[#64748B] transition-transform duration-150',
            open && 'rotate-180 text-[#315BE8]'
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={triggerLabel}
          className={cn(
            'absolute z-50 mt-2 w-80 sm:w-96 rounded-xl bg-white border border-[#E6EBF2] p-2',
            'shadow-[0_14px_32px_-8px_rgba(23,36,59,0.12),0_4px_10px_-2px_rgba(23,36,59,0.05)]',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          <div className="space-y-0.5">
            {items.map((item) => {
              const isSelected = item.id === activeItemId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    item.onSelect?.();
                    setOpen(false);
                  }}
                  className={cn(
                    'w-full text-left px-3.5 py-2.5 rounded-lg transition-colors flex items-start justify-between gap-3',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                    isSelected
                      ? 'bg-[#F6F9FF] text-[#315BE8]'
                      : 'hover:bg-[#F6F9FF] text-[#17243B]'
                  )}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#17243B]">
                        {item.label}
                      </span>
                      {item.meta && (
                        <>
                          <span
                            aria-hidden="true"
                            className="text-xs text-[#64748B]/50"
                          >
                            ·
                          </span>
                          <span className="text-xs text-[#16A6A0] font-medium">
                            {item.meta}
                          </span>
                        </>
                      )}
                    </div>
                    {item.description && (
                      <p className="mt-0.5 text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {footerAction && (
            <div className="mt-2 pt-2 border-t border-[#E6EBF2]">
              <button
                type="button"
                onClick={() => {
                  footerAction.onClick();
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-[#315BE8] hover:bg-[#F6F9FF] rounded-lg transition-colors"
              >
                <span>{footerAction.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

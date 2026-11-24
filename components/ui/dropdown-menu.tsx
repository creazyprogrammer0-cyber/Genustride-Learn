'use client';

import React, {useState, useRef, useEffect} from 'react';
import {ChevronDown, ArrowUpRight, Check} from 'lucide-react';
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
  isActiveTrigger?: boolean;
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
  isActiveTrigger = false,
  align = 'left',
  footerAction,
  className,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

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
      if (!open) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      const validRefs = itemRefs.current.filter(
        (el): el is HTMLButtonElement => el !== null
      );
      if (validRefs.length === 0) return;

      const currentIndex = validRefs.findIndex(
        (el) => el === document.activeElement
      );

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const nextIndex =
          currentIndex < validRefs.length - 1 ? currentIndex + 1 : 0;
        validRefs[nextIndex]?.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        const prevIndex =
          currentIndex > 0 ? currentIndex - 1 : validRefs.length - 1;
        validRefs[prevIndex]?.focus();
      } else if (event.key === 'Home') {
        event.preventDefault();
        validRefs[0]?.focus();
      } else if (event.key === 'End') {
        event.preventDefault();
        validRefs[validRefs.length - 1]?.focus();
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

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      if (!open && e.key === 'ArrowDown') {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => {
          itemRefs.current[0]?.focus();
        }, 15);
      }
    }
  };

  const hasActiveSelection = Boolean(activeItemId) || isActiveTrigger;

  return (
    <div ref={containerRef} className={cn('relative inline-block', className)}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleTriggerKeyDown}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          'inline-flex items-center gap-1.5 text-sm transition-colors whitespace-nowrap shrink-0 py-1.5 px-2 rounded-md border-b-2',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
          open
            ? 'text-[#315BE8] bg-[#F6F9FF] border-[#315BE8] font-semibold'
            : hasActiveSelection
              ? 'text-[#315BE8] border-[#315BE8] font-semibold'
              : 'text-[#17243B] border-transparent font-medium hover:text-[#315BE8]'
        )}
      >
        <span>{triggerLabel}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-[#64748B] transition-transform duration-150',
            (open || hasActiveSelection) && 'text-[#315BE8]',
            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={triggerLabel}
          className={cn(
            'absolute z-50 mt-2 w-[calc(100vw-2rem)] max-w-96 rounded-xl bg-white border border-[#E6EBF2] p-2 animate-reveal',
            'shadow-[0_14px_32px_-8px_rgba(23,36,59,0.12),0_4px_10px_-2px_rgba(23,36,59,0.05)]',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          <div className="space-y-0.5">
            {items.map((item, idx) => {
              const isSelected = item.id === activeItemId;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    item.onSelect?.();
                    setOpen(false);
                  }}
                  className={cn(
                    'w-full text-left px-3.5 py-2.5 rounded-lg transition-colors flex items-start justify-between gap-3 cursor-pointer',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]',
                    isSelected
                      ? 'bg-[#EEF3FF] text-[#315BE8]'
                      : 'hover:bg-[#F6F9FF] text-[#17243B]'
                  )}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          'text-sm font-semibold',
                          isSelected ? 'text-[#315BE8]' : 'text-[#17243B]'
                        )}
                      >
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
                  {isSelected && (
                    <Check
                      className="w-4 h-4 text-[#315BE8] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {footerAction && (
            <div className="mt-2 pt-2 border-t border-[#E6EBF2]">
              <button
                ref={(el) => {
                  itemRefs.current[items.length] = el;
                }}
                type="button"
                role="menuitem"
                onClick={() => {
                  footerAction.onClick();
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-[#315BE8] hover:bg-[#F6F9FF] rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BE8]"
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

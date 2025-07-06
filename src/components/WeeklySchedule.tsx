import React from 'react';
import { Clock, Calendar, Users, BookOpen, Music, Zap } from 'lucide-react';

interface ScheduleItem {
  time: string;
  event: string;
  description: string;
  icon: React.ReactNode;
}

interface DaySchedule {
  day: string;
  items: ScheduleItem[];
}

interface WeeklyScheduleProps {
  onNavigate?: (section: string) => void;
}

const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({ onNavigate }) => {
  const schedule: DaySchedule[] = [
    {
      day: 'Sunday',
      items: [
        {
          time: '9:00 AM',
          event: 'Sunday School',
          description: 'Bible study for all ages',
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          time: '10:30 AM',
          event: 'Morning Worship Service',
          description: 'Main worship service with sermon',
          icon: <Users className="h-5 w-5" />
        },
        {
          time: '6:00 PM',
          event: 'Evening Service',
          description: 'Evening worship and fellowship',
          icon: <Music className="h-5 w-5" />
        }
      ]
    },
    {
      day: 'Monday',
      items: [
        {
          time: '8:00 AM – 4:00 PM',
          event: 'Pastoral Meetings & Counseling',
          description: 'Meet with the pastor for personal assistance, prayer, mentorship, and advice.',
          icon: <Users className="h-5 w-5" />
        },
        {
          time: '7:00 PM',
          event: 'Prayer & Fasting',
          description: 'Corporate prayer and intercession',
          icon: <Zap className="h-5 w-5" />
        }
      ]
    },
    {
      day: 'Tuesday',
      items: [
        {
          time: '8:00 AM – 4:00 PM',
          event: 'Pastoral Meetings & Counseling',
          description: 'Meet with the pastor for personal assistance, prayer, mentorship, and advice.',
          icon: <Users className="h-5 w-5" />
        },
        {
          time: '7:00 PM',
          event: 'Bible Study',
          description: 'Midweek Bible study and discussion',
          icon: <BookOpen className="h-5 w-5" />
        }
      ]
    },
    {
      day: 'Wednesday',
      items: [
        {
          time: '8:00 AM – 4:00 PM',
          event: 'Pastoral Meetings & Counseling',
          description: 'Meet with the pastor for personal assistance, prayer, mentorship, and advice.',
          icon: <Users className="h-5 w-5" />
        },
        {
          time: '6:30 PM',
          event: 'Youth Fellowship',
          description: 'Programs for teens and young adults',
          icon: <Users className="h-5 w-5" />
        }
      ]
    },
    {
      day: 'Thursday',
      items: [
        {
          time: '8:00 AM – 4:00 PM',
          event: 'Pastoral Meetings & Counseling',
          description: 'Meet with the pastor for personal assistance, prayer, mentorship, and advice.',
          icon: <Users className="h-5 w-5" />
        },
        {
          time: '7:00 PM',
          event: 'Choir Practice',
          description: 'Worship team and choir rehearsal',
          icon: <Music className="h-5 w-5" />
        }
      ]
    },
    {
      day: 'Friday',
      items: [
        {
          time: '8:00 AM – 4:00 PM',
          event: 'Pastoral Meetings & Counseling',
          description: 'Meet with the pastor for personal assistance, prayer, mentorship, and advice.',
          icon: <Users className="h-5 w-5" />
        },
        {
          time: '7:00 PM',
          event: 'Men\'s Fellowship',
          description: 'Brotherhood and men\'s ministry',
          icon: <Users className="h-5 w-5" />
        }
      ]
    },
    {
      day: 'Saturday',
      items: [
        {
          time: '10:00 AM',
          event: 'Women\'s Fellowship',
          description: 'Women\'s ministry and outreach',
          icon: <Users className="h-5 w-5" />
        },
        {
          time: '3:00 PM',
          event: 'Community Outreach',
          description: 'Serving the local community',
          icon: <Zap className="h-5 w-5" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-blue-800 dark:text-blue-400 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Weekly Schedule</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us throughout the week for worship, fellowship, and spiritual growth. 
            Everyone is welcome to participate in our church family activities.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {schedule.map((daySchedule, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-6 text-center">
                {daySchedule.day}
              </h3>
              
              <div className="space-y-4">
                {daySchedule.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-2 flex-shrink-0 text-white">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Clock className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                            {item.time}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {item.event}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Events Notice */}
        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Special Events & Services</h3>
            <p className="text-blue-100 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Throughout the year, we host special events, conferences, and community outreach programs. 
              Stay connected with us to be informed about upcoming special services and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
              >
                Get Event Updates
              </button>
              <button
                onClick={() => onNavigate?.('prayer')}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200"
              >
                Join Prayer List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySchedule;